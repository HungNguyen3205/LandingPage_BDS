import type {
  NavItem,
  ValueItem,
  ProductItem,
  AmenityItem,
  GalleryItem,
  FAQItem,
  QuickContactConfig,
  ContactInfoConfig,
  ProjectMetadata,
  PrivacyPolicyConfig
} from '../types';

export const projectMeta: ProjectMetadata = {
  brandName: 'VINHOMES HẢI VÂN BAY',
  brandSubtitle: 'THÀNH PHỐ NGHỈ DƯỠNG BÊN VỊNH DI SẢN',
  tagline: 'Kiệt tác nghỉ dưỡng ven biển đẳng cấp quốc tế.',
  secondaryTagline: 'Đại đô thị nghỉ dưỡng 240ha kề cận vịnh biển Hải Vân tuyệt mỹ, kiến tạo chuẩn mực sống thượng lưu tại Đà Nẵng.',
  disclaimerShort: 'Thông tin, hình ảnh và giá bán tham khảo từ đại lý phân phối chính thức.',
  disclaimerDetailed: 'Website thuộc quyền sở hữu và vận hành bởi đối tác phân phối chính thức của dự án Vinhomes Hải Vân Bay Đà Nẵng. Mọi thông tin, tài liệu và hình ảnh được cập nhật dựa trên nguồn tin từ Chủ đầu tư và có thể điều chỉnh tùy theo quy định thực tế.',
  designerCredit: 'Phân phối bởi DANAVA Partner',
  contactStatusNotice: 'Hotline tư vấn: 0987 069 770',
};

export const navigationItems: NavItem[] = [
  { label: 'Tổng quan', href: '/#tong-quan' },
  { label: 'Sản phẩm', href: '/#bo-suu-tap' },
  { label: 'Tiện ích', href: '/#tien-ich' },
  { label: 'Vị trí', href: '/#vi-tri' },
  { label: 'Thư viện ảnh', href: '/#thu-vien' },
  { label: 'Chính sách & Liên hệ', href: '/lien-he' },
];

export const consultationCtaConfig = {
  label: 'Đăng ký tư vấn',
  href: '/lien-he',
};

export const contactConfig: ContactInfoConfig = {
  advisorUnit: 'Văn phòng Bán hàng Vinhomes Hải Vân Bay (MICC / DANAVA)',
  hotline: '0987 069 770',
  email: 'danava.haivanbay@gmail.com',
  officeAddress: '305A Trần Hưng Đạo, P. An Hải, TP. Đà Nẵng',
  mapCoordinates: undefined,
  officialMapEmbedUrl: undefined,
};

export const privacyPolicyConfig: PrivacyPolicyConfig = {
  lastUpdatedDate: '20/10/2026',
  operatorNotice: 'Nội dung cập nhật dựa trên thông tin công bố chính thức của dự án Vinhomes Hải Vân Bay Đà Nẵng.',
  retentionNotice: 'Lưu trữ phục vụ liên hệ tư vấn và gửi tài liệu dự án',
  contactNotice: 'Hotline tiếp nhận: 0987 069 770 • Văn phòng: 305A Trần Hưng Đạo, P. An Hải, TP. Đà Nẵng',
};

export const VALID_PRODUCT_PARAM_MAP: Record<string, string> = {
  'biet-thu-don-lap': 'Biệt Thự Đơn Lập (Lâm Phong)',
  'biet-thu-song-lap': 'Biệt Thự Song Lập (Bạch Vân)',
  'nha-lien-ke': 'Nhà Liền Kề (Hồng Châu & Ánh Ngọc)',
  'shophouse-can-ho': 'Shophouse & Căn Hộ',
  'can-tu-van-them': 'Cần tư vấn thêm',
};

export const sanitizeProductQueryParam = (param: string | null | undefined): string => {
  if (!param) return 'Cần tư vấn thêm';
  const clean = param.toLowerCase().trim();
  return VALID_PRODUCT_PARAM_MAP[clean] || 'Cần tư vấn thêm';
};

export const quickContactConfig: QuickContactConfig = {
  phoneNumber: '0987069770',
  zaloUrl: 'https://zalo.me/0987069770',
  enableScrollTop: true,
  enableMobileBottomBar: true,
};

// 4 Trụ Cột Giá Trị (USPs) nổi bật của Vinhomes Hải Vân Bay
export const valueItems: ValueItem[] = [
  {
    id: 'val-1',
    title: 'Vị trí độc tôn',
    description: 'Kề cận vịnh biển Hải Vân tuyệt mỹ, tâm điểm cung đường di sản ven biển Đà Nẵng – Hội An.',
    iconName: 'Compass',
  },
  {
    id: 'val-2',
    title: 'Chủ đầu tư uy tín',
    description: 'Phát triển bởi Vinhomes – Thương hiệu bất động sản số 1 Việt Nam với bảo chứng tiến độ và chất lượng.',
    iconName: 'Sparkles',
  },
  {
    id: 'val-3',
    title: 'Hệ tiện ích đẳng cấp',
    description: 'Hơn 50 tiện ích 5 sao: bến du thuyền quốc tế, Vincom Mega Mall, trường Vinschool và bệnh viện Vinmec.',
    iconName: 'Waves',
  },
  {
    id: 'val-4',
    title: 'Không gian xanh 240ha',
    description: 'Mật độ xây dựng thấp, ôm trọn 2km đường bờ biển và suối cảnh quan sinh thái trong lành.',
    iconName: 'Trees',
  },
];

// Dòng sản phẩm thực tế từ haivanbaydanang.com.vn
export const productsData: ProductItem[] = [
  {
    id: 'biet-thu-don-lap',
    name: 'Biệt Thự Đơn Lập (Lâm Phong)',
    category: 'villa',
    categoryLabel: 'Biệt thự đơn lập',
    area: '237 – 252 m²',
    priceNote: 'Từ 18,1 tỷ',
    description: 'Sở hữu 2 mặt tiền thoáng rộng với tầm nhìn hướng trọn vịnh biển và dòng suối mát lành, kiến tạo không gian an cư thượng lưu biệt lập tuyệt đối.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    tags: ['2 Mặt tiền', 'View suối & biển', 'Phân khu Đảo Ngọc', 'Hàng ngoại giao'],
  },
  {
    id: 'biet-thu-song-lap',
    name: 'Biệt Thự Song Lập (Bạch Vân)',
    category: 'villa',
    categoryLabel: 'Biệt thự song lập',
    area: '140 – 178 m²',
    priceNote: 'Từ 9,1 tỷ',
    description: 'Nằm tại phân khu Bạch Vân yên bình, kế bên trường học và suối tự nhiên. Thiết kế 3 tầng sang trọng đón nắng sớm và gió biển trong lành.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    tags: ['Kề suối mát mẻ', 'Gần Vinschool', 'Phân khu Bạch Vân', 'Hướng Nam'],
  },
  {
    id: 'nha-lien-ke',
    name: 'Nhà Phố Liền Kề (Hồng Châu & Ánh Ngọc)',
    category: 'townhouse',
    categoryLabel: 'Nhà liền kề',
    area: '70 – 80 m²',
    priceNote: 'Từ 7,3 tỷ',
    description: 'Dòng sản phẩm có mức giá tốt nhất dự án, tiềm năng tăng giá và tính thanh khoản vượt trội, kết nối trực tiếp đến các trục đại lộ trung tâm.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    tags: ['Giá tốt nhất dự án', 'Vị trí khan hiếm', 'Phân khu Đảo Ngọc', 'Còn hàng'],
  },
  {
    id: 'shophouse-can-ho',
    name: 'Shophouse & Căn Hộ Nghỉ Dưỡng',
    category: 'shophouse',
    categoryLabel: 'Thương mại & Căn hộ',
    area: '45 – 120 m²',
    priceNote: 'Liên hệ báo giá',
    description: 'Đón đầu dòng du khách khổng lồ với tầm nhìn panorama hướng trọn vịnh Hải Vân, tối ưu hóa công năng vừa ở vừa kinh doanh sinh lời bền vững.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    tags: ['Mặt tiền đại lộ', 'Khai thác cho thuê', 'Tiện ích 5 sao', 'Đón đầu tương lai'],
  },
];

// Hệ thống tiện ích chuẩn Vinhomes Hải Vân Bay
export const amenitiesData: AmenityItem[] = [
  {
    id: 'amenity-beach-marina',
    title: 'Bãi biển riêng 2km & Bến du thuyền quốc tế',
    tag: 'TIỆN ÍCH ĐẶC QUYỀN',
    tagline: 'Khởi đầu hải trình thượng lưu bên bờ vịnh di sản',
    description: 'Sở hữu 2km đường bờ biển riêng biệt lập với cát mịn phẳng lặng và làn nước trong xanh. Bến du thuyền chuẩn quốc tế là điểm neo đậu của những du thuyền hạng sang, mở ra phong cách sống thời thượng.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    features: [
      '2km bãi biển riêng tư tuyệt đối',
      'Bến du thuyền quốc tế cao cấp',
      'Beach club & quầy lounge ven biển',
    ],
  },
  {
    id: 'amenity-vincom-megamall',
    title: 'Vincom Mega Mall Hải Vân Bay',
    tag: 'THƯƠNG MẠI & GIẢI TRÍ',
    tagline: 'Trung tâm mua sắm sầm uất hàng đầu miền Trung',
    description: 'Tổ hợp thương mại quy mô lớn hội tụ hàng trăm thương hiệu thời trang, ẩm thực Á - Âu, rạp chiếu phim hiện đại và các khu vui chơi giải trí đa thế hệ sôi động suốt ngày đêm.',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Hàng trăm thương hiệu quốc tế',
      'Khu ẩm thực Á - Âu đa dạng',
      'Tổ hợp vui chơi giải trí trong nhà',
    ],
  },
  {
    id: 'amenity-vinschool-vinmec',
    title: 'Trường học Vinschool & Bệnh viện Vinmec',
    tag: 'Y TẾ & GIÁO DỤC',
    tagline: 'Môi trường phát triển toàn diện và an tâm trọn đời',
    description: 'Hệ thống trường liên cấp Vinschool chất lượng cao ươm mầm thế hệ công dân toàn cầu, kết hợp cùng Bệnh viện Đa khoa Quốc tế Vinmec chăm sóc sức khỏe chuẩn 5 sao 24/7 cho toàn thể cư dân.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Trường liên cấp Vinschool chuẩn quốc tế',
      'Bệnh viện Vinmec với trang thiết bị tối tân',
      'Dịch vụ y tế đặc quyền và bác sĩ gia đình',
    ],
  },
  {
    id: 'amenity-central-park',
    title: 'Công viên trung tâm & Suối cảnh quan sinh thái',
    tag: 'CÔNG VIÊN & WELLNESS',
    tagline: 'Tái tạo năng lượng cùng thiên nhiên trong lành',
    description: 'Chuỗi công viên chủ đề liên hoàn, đường dạo bộ ven suối tự nhiên uốn lượn, hồ bơi vô cực và khu thể thao phức hợp mang lại không gian sống thanh sạch, an yên mỗi ngày.',
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Đường dạo bộ ven suối nước tự nhiên',
      'Hồ bơi cảnh quan vô cực view biển',
      'Sân thể thao đa năng, tennis & đường chạy bộ',
    ],
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Phối cảnh tổng thể vịnh biển',
    caption: 'Đại đô thị nghỉ dưỡng 240ha kề đèo Hải Vân và vịnh biển tuyệt mỹ',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    aspectClass: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
  },
  {
    id: 'gal-2',
    title: 'Biệt thự Đơn Lập Lâm Phong',
    caption: 'Kiến trúc hiện đại với sân vườn rộng mở ôm trọn cảnh sắc thiên nhiên',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-3',
    title: 'Nội thất phòng khách sang trọng',
    caption: 'Vật liệu cao cấp với góc nhìn panorama hướng biển và suối',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-4',
    title: 'Hoàng hôn bên bến du thuyền',
    caption: 'Khoảnh khắc bình yên và lãng mạn tại vịnh biển di sản',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    title: 'Không gian sống xanh mát',
    caption: 'Hòa mình vào bóng mát cây xanh và làn gió đại dương trong lành',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Dự án Vinhomes Hải Vân Bay có những loại hình sản phẩm nào?',
    answer: 'Vinhomes Hải Vân Bay Đà Nẵng phát triển đa dạng các dòng sản phẩm bất động sản cao cấp bao gồm: Biệt thự đơn lập (Lâm Phong 237-252m²), Biệt thự song lập (Bạch Vân, Thanh Khê 140-178m²), Nhà phố liền kề (Hồng Châu, Ánh Ngọc 70-80m²), Shophouse thương mại và Căn hộ nghỉ dưỡng cao cấp.',
  },
  {
    id: 'faq-2',
    question: 'Chính sách bán hàng và ưu đãi tài chính của dự án như thế nào?',
    answer: 'Khách hàng sở hữu sớm nhận được nhiều ưu đãi đặc biệt: Chiết khấu thanh toán sớm lên đến 9%, hỗ trợ lãi suất 0% tối đa 24 tháng, ngân hàng hỗ trợ cho vay đến 80% giá trị sản phẩm. Ngoài ra còn có quà tặng gói chăm sóc sức khỏe Vinmec 100 triệu, nghỉ dưỡng Vinpearl 5 đêm và miễn phí quản lý 2 năm.',
  },
  {
    id: 'faq-3',
    question: 'Vị trí Vinhomes Hải Vân Bay kết nối giao thông ra sao?',
    answer: 'Dự án tọa lạc ngay cung đường ven vịnh Hải Vân, Đà Nẵng: Chỉ mất 15 phút đến Ga Đà Nẵng, 20 phút đến Trung tâm thành phố, 25 phút đến Phố cổ Hội An và 30 phút đến Sân bay Quốc tế Đà Nẵng, kết nối trực tiếp cao tốc Hải Vân.',
  },
  {
    id: 'faq-4',
    question: 'Làm thế nào để tôi nhận bảng giá và đăng ký lịch xem thực tế?',
    answer: 'Quý khách vui lòng để lại thông tin trong biểu mẫu đăng ký tư vấn hoặc liên hệ trực tiếp hotline 0987 069 770. Chuyên viên tư vấn F1 sẽ gửi trọn bộ tài liệu chi tiết, mặt bằng phân lô, bảng giá ngoại giao và hỗ trợ đưa đón quý khách tham quan thực tế.',
  },
];
