<?php
/**
 * Cấu hình hệ thống tiếp nhận tư vấn AZURE BAY (Dành cho cPanel / Hosting AZDIGI)
 */

return [
    // Webhook Google Apps Script
    'GOOGLE_SHEET_WEBHOOK_URL' => 'https://script.google.com/macros/s/AKfycbxAFcAQ6Qt9ert8PcOSIAFuL17A8P15LEJJhv4Aw57yfavhCqOWkADeqPNMj8ZTYEif/exec',

    // Telegram Bot Token & Chat ID tiếp nhận thông báo
    'TELEGRAM_BOT_TOKEN' => '8700174286:AAGatWdVagYJSEUhrEmJfXef8JhqI8aCwOE',
    'TELEGRAM_CHAT_ID' => '-5528054475',

    // Chế độ demo (false = tiếp nhận thật và gửi thông báo)
    'ENABLE_DEMO_MODE' => false,
];
