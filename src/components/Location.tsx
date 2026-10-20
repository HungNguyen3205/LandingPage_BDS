import React from 'react';
import { Compass, Waves, Building2, Palmtree, MapPin } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="vi-tri" className="py-20 lg:py-28 bg-[#F4F1E8] relative overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 text-champagne text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase mb-3">
            <span>04 / VỊ TRÍ & LIÊN KẾT KHÔNG GIAN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-forest leading-[1.2] tracking-tight mb-4">
            Đủ gần phồn hoa. <br />
            <span className="text-forest-light font-serif">Đủ riêng để tận hưởng.</span>
          </h2>
          <p className="text-ink-muted text-base leading-relaxed">
            Lấy cảm hứng từ cung đường ven biển tuyệt mỹ của Đà Nẵng, vị trí được định hướng để mang đến sự cân bằng hoàn hảo giữa nhịp sống đô thị hiện đại và sự an nhiên tuyệt đối bên bờ đại dương.
          </p>
        </div>

        {/* 2-Column Content: Left Details & Pillars, Right Visual & Illustrative Schematic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: 3 Core Connection Axes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-luxury border border-forest/10 shadow-subtle flex items-start space-x-4">
              <div className="w-11 h-11 rounded-full bg-sand flex items-center justify-center text-forest shrink-0 border border-forest/10">
                <Waves className="w-5 h-5 text-champagne" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-forest mb-1.5">
                  Thiên nhiên & Vịnh biển
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Trọn vẹn bầu không khí đại dương thanh khiết, ngắm nhìn bình minh rạng rỡ và hoàng hôn buông dài trên làn nước biếc.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-luxury border border-forest/10 shadow-subtle flex items-start space-x-4">
              <div className="w-11 h-11 rounded-full bg-sand flex items-center justify-center text-forest shrink-0 border border-forest/10">
                <Building2 className="w-5 h-5 text-champagne" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-forest mb-1.5">
                  Nhịp sống Đô thị
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Thuận tiện tiếp cận các trục giao thông đối ngoại, hệ thống dịch vụ y tế, giáo dục và ẩm thực phong phú của thành phố biển.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-luxury border border-forest/10 shadow-subtle flex items-start space-x-4">
              <div className="w-11 h-11 rounded-full bg-sand flex items-center justify-center text-forest shrink-0 border border-forest/10">
                <Palmtree className="w-5 h-5 text-champagne" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-forest mb-1.5">
                  Quần thể Nghỉ dưỡng
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Nằm trên cung đường di sản và các tổ hợp du lịch nghỉ dưỡng, sân golf chuẩn quốc tế ven bờ vịnh.
                </p>
              </div>
            </div>

            {/* Official notice */}
            <div className="p-4 rounded bg-forest/5 border border-forest/10 flex items-center space-x-3 text-xs text-ink-muted">
              <Compass className="w-4 h-4 text-champagne shrink-0" />
              <span>
                <strong>Lưu ý:</strong> Vị trí chính thức sẽ được cập nhật theo dự án thực tế.
              </span>
            </div>
          </div>

          {/* Right: Evocative Coastline Photo & Illustrative Schematic Layout */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Evocative Landscape Image */}
            <div className="relative rounded-luxury overflow-hidden shadow-card border border-forest/10 aspect-[16/9]">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85"
                alt="Cảnh quan thiên nhiên vịnh biển thanh bình gợi cảm hứng Đà Nẵng"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-champagne uppercase block">
                    CẢM HỨNG ĐỊA ĐIỂM
                  </span>
                  <span className="font-serif text-lg font-light">
                    Vịnh biển miền nhiệt đới Đà Nẵng
                  </span>
                </div>
                <span className="text-xs text-sand/80 bg-forest-dark/70 px-2.5 py-1 rounded border border-white/10">
                  Ảnh cảm hứng
                </span>
              </div>
            </div>

            {/* Minimalist Architectural Illustrative Schematic Diagram */}
            <div className="bg-forest-dark text-white p-6 sm:p-7 rounded-luxury border border-champagne/20 shadow-subtle relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-champagne" />
                  <span className="text-xs font-mono tracking-widest uppercase text-champagne">
                    SƠ ĐỒ MINH HỌA ĐỊNH HƯỚNG KHÔNG GIAN
                  </span>
                </div>
                <span className="text-[11px] text-sand/60 italic">Sơ đồ minh họa</span>
              </div>

              {/* Vector diagram showing concept axes */}
              <div className="relative py-4 px-2 sm:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  
                  {/* Axis 1 */}
                  <div className="p-3 rounded bg-white/5 border border-white/10 flex flex-col items-center">
                    <span className="text-champagne font-mono text-xs mb-1">TRỤC VEN BIỂN</span>
                    <span className="font-serif text-sm text-sand font-medium">Bờ vịnh & Không gian xanh</span>
                    <span className="text-[11px] text-sand/60 mt-1">Định hướng sinh thái nghỉ dưỡng</span>
                  </div>

                  {/* Core Sanctuary */}
                  <div className="p-3.5 rounded bg-champagne/15 border border-champagne/40 flex flex-col items-center shadow-gold">
                    <span className="text-champagne font-mono text-xs font-bold mb-1">AZURE BAY</span>
                    <span className="font-serif text-base text-white font-semibold">Tâm Điểm An Cư</span>
                    <span className="text-[11px] text-champagne-light/90 mt-1">Không gian riêng tư biệt lập</span>
                  </div>

                  {/* Axis 2 */}
                  <div className="p-3 rounded bg-white/5 border border-white/10 flex flex-col items-center">
                    <span className="text-champagne font-mono text-xs mb-1">TRỤC KẾT NỐI</span>
                    <span className="font-serif text-sm text-sand font-medium">Đô thị & Tiện ích dịch vụ</span>
                    <span className="text-[11px] text-sand/60 mt-1">Giao thương & văn hóa</span>
                  </div>

                </div>

                <div className="mt-4 text-center">
                  <p className="text-[11px] text-sand/60">
                    * Sơ đồ phác họa mô hình tổ chức không gian định hướng. Thông tin bản đồ chi tiết sẽ được công bố kèm hồ sơ quy hoạch dự án.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
