import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleLeadSubmission } from '../server/leadHandler';
import type { LeadSubmissionPayload } from '../server/types';

/**
 * Serverless Function handler tương thích Vercel, Netlify và Node.js server
 * Endpoint: POST /api/consultation
 */
export default async function handler(
  req: IncomingMessage & { body?: any; query?: any },
  res: ServerResponse & { status?: (code: number) => any; json?: (data: any) => any }
) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Idempotency-Key');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: false, message: 'Method Not Allowed' }));
    return;
  }

  try {
    let payload: LeadSubmissionPayload;

    if (req.body && typeof req.body === 'object') {
      payload = req.body;
    } else {
      // Đọc body dạng stream nếu chưa được parse
      const chunks: Uint8Array[] = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const rawText = Buffer.concat(chunks).toString('utf-8');
      payload = rawText ? JSON.parse(rawText) : {};
    }

    const clientIp =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      '127.0.0.1';

    const result = await handleLeadSubmission(payload, clientIp);

    res.statusCode = result.status;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(result.body));
  } catch (err: unknown) {
    console.error('[API consultation] Unhandled error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        success: false,
        statusCode: 'SERVICE_UNAVAILABLE',
        message: 'Lỗi hệ thống tiếp nhận. Vui lòng thử lại sau.',
      })
    );
  }
}
