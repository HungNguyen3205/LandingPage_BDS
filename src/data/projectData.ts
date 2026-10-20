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
  brandName: 'VINHOMES',
  brandSubtitle: 'LUXURY RESIDENCES',
  tagline: 'Nơi khởi nguồn cuộc sống thịnh vượng.',
  secondaryTagline: 'Không gian sống sinh thái tinh tế, mở ra một chuẩn mực an nhiên và thịnh vượng.',
  disclaimerShort: 'Dự án, hình ảnh, giá và thông số trên website mang tính minh họa.',
  disclaimerDetailed: 'Đây là website giới thiệu dự án mang tính chất minh họa giao diện và ý tưởng thiết kế. Tất cả hình ảnh, giá bán tham khảo và thông số kỹ thuật chưa phải thông tin pháp lý hoặc cam kết thương mại chính thức.',
  designerCredit: 'Thiết kế bởi DANAVA Solutions',
  contactStatusNotice: 'Thông tin sẽ được cập nhật',
};

export const navigationItems: NavItem[] = [
  { label: 'Tổng quan', href: '/#tong-quan' },
  { label: 'Bộ sưu tập', href: '/#bo-suu-tap' },
  { label: 'Tiện ích', href: '/#tien-ich' },
  { label: 'Vị trí', href: '/#vi-tri' },
  { label: 'Thư viện', href: '/#thu-vien' },
  { label: 'Liên hệ', href: '/lien-he' },
];

export const consultationCtaConfig = {
  label: 'Đăng ký tư vấn',
  href: '/lien-he',
};

export const contactConfig: ContactInfoConfig = {
  // Khi để trống, website hiển thị: "Thông tin liên hệ chính thức sẽ được cập nhật"
  advisorUnit: '',
  hotline: '',
  email: '',
  officeAddress: '',
  // Chỉ hiển thị bản đồ khi có tọa độ hoặc URL nhúng chính thức. Khi undefined -> Bỏ hẳn khu vực bản đồ.
  mapCoordinates: undefined,
  officialMapEmbedUrl: undefined,
};

export const privacyPolicyConfig: PrivacyPolicyConfig = {
  lastUpdatedDate: '20/10/2026',
  operatorNotice: 'Nội dung mẫu — cần cập nhật thông tin đơn vị vận hành trước khi website tiếp nhận đăng ký thực tế.',
  retentionNotice: 'Cần được đơn vị vận hành bổ sung trước khi sử dụng thực tế',
  contactNotice: 'Thông tin kênh liên hệ chính thức sẽ được đơn vị vận hành bổ sung trước khi vận hành thực tế',
};

export const VALID_PRODUCT_PARAM_MAP: Record<string, string> = {
  'ocean-villa': 'Ocean Villa',
  'garden-residence': 'Garden Residence',
  'sky-collection': 'Sky Collection',
  'can-tu-van-them': 'Cần tư vấn thêm',
};

export const sanitizeProductQueryParam = (param: string | null | undefined): string => {
  if (!param) return 'Cần tư vấn thêm';
  const clean = param.toLowerCase().trim();
  return VALID_PRODUCT_PARAM_MAP[clean] || 'Cần tư vấn thêm';
};

export const quickContactConfig: QuickContactConfig = {
  // If set to empty or undefined, the button will not be displayed (avoids fake active buttons)
  phoneNumber: '', // Set when real phone number is provided
  zaloUrl: '',     // Set when real Zalo link is provided
  enableScrollTop: true,
  enableMobileBottomBar: true,
};

export const valueItems: ValueItem[] = [
  {
    id: 'val-1',
    title: 'Kiến trúc tinh tế',
    description: 'Từng đường nét tối giản tôn vinh vẻ đẹp tự nhiên và ánh sáng biển trời.',
    iconName: 'Sparkles',
  },
  {
    id: 'val-2',
    title: 'Không gian xanh',
    description: 'Cảnh quan nhiệt đới xanh mát, đón gió biển trong lành quanh năm.',
    iconName: 'Trees',
  },
  {
    id: 'val-3',
    title: 'Trải nghiệm nghỉ dưỡng',
    description: 'Hệ tiện ích đặc quyền nâng tầm phong cách sống tĩnh tại và riêng tư.',
    iconName: 'Waves',
  },
  {
    id: 'val-4',
    title: 'Kết nối thuận tiện',
    description: 'Hài hòa giữa nhịp sống đô thị năng động và sự thanh bình ven biển.',
    iconName: 'Compass',
  },
];

export const productsData: ProductItem[] = [
  {
    id: 'ocean-villa',
    name: 'Ocean Villa',
    category: 'villa',
    categoryLabel: 'Biệt thự nghỉ dưỡng',
    area: '220 – 350 m²',
    priceNote: 'Từ 18,5 tỷ',
    description: 'Tọa lạc tại vị trí trực diện biển với hồ bơi vô cực riêng, mang lại tầm nhìn khoáng đạt ôm trọn vịnh nước trong xanh cùng không gian thư thái tuyệt đối.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    tags: ['Hồ bơi riêng', 'Mặt biển', '3–4 Phòng ngủ', 'Sân tắm nắng riêng'],
  },
  {
    id: 'garden-residence',
    name: 'Garden Residence',
    category: 'villa',
    categoryLabel: 'Biệt thự sân vườn',
    area: '180 – 240 m²',
    priceNote: 'Từ 12,8 tỷ',
    description: 'Ẩn mình giữa vườn cây nhiệt đới xanh ngát với hiên nhà rộng thoáng, nơi lưu giữ những phút giây sum vầy an yên của gia đình bên thiên nhiên thanh lành.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    tags: ['Sân vườn xanh', 'Kiến trúc mở', '3 Phòng ngủ', 'Sân trong đón sáng'],
  },
  {
    id: 'sky-collection',
    name: 'Sky Collection',
    category: 'apartment',
    categoryLabel: 'Căn hộ nghỉ dưỡng',
    area: '85 – 160 m²',
    priceNote: 'Từ 5,2 tỷ',
    description: 'Không gian sống tầng cao tinh tế với ban công kính panorama, đón trọn ánh bình minh trên biển và bức tranh lung linh của thành phố về đêm.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    tags: ['Tầm nhìn vịnh biển', 'Ban công kính rộng', '1–3 Phòng ngủ', 'Trần cao thoáng'],
  },
];

export const amenitiesData: AmenityItem[] = [
  {
    id: 'amenity-pool',
    title: 'Hồ bơi cảnh quan',
    tag: 'Ý TƯỞNG TIỆN ÍCH',
    tagline: 'Mặt nước vô cực tiếp nối chân trời biển',
    description: 'Hồ bơi được thiết kế với độ sâu chuyển tiếp tự nhiên, mặt nước phẳng lặng như gương soi bóng mây trời. Xung quanh là sàn gỗ cao cấp và cụm cabana riêng tư dành cho những buổi chiều thư giãn bên ly nước mát.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Thiết kế tràn bờ hướng thẳng vịnh biển',
      'Khu vực thư giãn Cabana riêng tư',
      'Quầy phục vụ thức uống thanh nhẹ bên hồ',
    ],
  },
  {
    id: 'amenity-wellness',
    title: 'Wellness & Yoga',
    tag: 'Ý TƯỞNG TIỆN ÍCH',
    tagline: 'Khoảng lặng tĩnh tại giữa đại dương xanh',
    description: 'Sàn tập yoga bằng gỗ tự nhiên nép mình bên thảm thực vật bản địa, nơi đón những tia nắng sớm đầu ngày và làn gió biển mát rượi, giúp tái tạo năng lượng cho cả thể chất lẫn tinh thần.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Sàn gỗ ngoài trời đón nắng sớm trong lành',
      'Không gian thiền định yên tĩnh giữa thiên nhiên',
      'Góc thư giãn trà hoa thảo mộc',
    ],
  },
  {
    id: 'amenity-garden',
    title: 'Vườn dạo bộ nhiệt đới',
    tag: 'Ý TƯỞNG TIỆN ÍCH',
    tagline: 'Những bước chân an nhiên dưới bóng cây',
    description: 'Tuyến đường dạo bộ được phủ bóng bởi các loài cây nhiệt đới đặc trưng, đan xen cùng hoa dại và tiểu cảnh nước. Ánh sáng ấm áp ban chiều tạo nên một hành trình đi dạo êm đềm cùng người thân.',
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Hệ thực vật bản địa đa tầng rợp bóng',
      'Đường dạo lát đá tự nhiên chống trơn trượt',
      'Ghế nghỉ chân đặt tại các góc nhìn đẹp',
    ],
  },
  {
    id: 'amenity-lounge',
    title: 'Lounge cộng đồng',
    tag: 'Ý TƯỞNG TIỆN ÍCH',
    tagline: 'Gặp gỡ và kết nối những tâm hồn đồng điệu',
    description: 'Không gian mở thanh lịch với trần cao và nội thất mây gỗ tinh xảo, là điểm hẹn lý tưởng để thưởng trà chiều, đọc sách hoặc trò chuyện cùng những người hàng xóm cùng chuẩn sống.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Nội thất bespoke tinh tế và sang trọng',
      'Tầm nhìn mở rộng đón trọn gió biển hoàng hôn',
      'Khu vực đọc sách và tiếp khách trang nhã',
    ],
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Kiến trúc mặt ngoài',
    caption: 'Đường nét hiện đại hòa quyện tinh tế cùng cảnh quan nhiệt đới',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    aspectClass: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
  },
  {
    id: 'gal-2',
    title: 'Phòng ngủ hướng biển',
    caption: 'Đón ánh sáng ban mai nhẹ nhàng qua hệ vách kính rộng',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-3',
    title: 'Không gian phòng tắm thư giãn',
    caption: 'Bồn tắm độc lập với góc nhìn hướng vườn xanh mướt',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-4',
    title: 'Hiên thư giãn chiều tà',
    caption: 'Khoảnh khắc hoàng hôn lắng đọng bên mặt nước tĩnh tại',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'gal-5',
    title: 'Góc nghỉ bên hồ bơi',
    caption: 'Nơi thả lỏng cơ thể và tận hưởng âm thanh êm dịu của gió biển',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
    aspectClass: 'aspect-[4/3]',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Vinhomes có những loại hình sản phẩm nào?',
    answer: 'Vinhomes giới thiệu ba dòng sản phẩm cao cấp chính: Ocean Villa (biệt thự nghỉ dưỡng sang trọng), Garden Residence (biệt thự sân vườn xanh mát) và Sky Collection (căn hộ cao cấp tầng cao). Từng dòng sản phẩm được thiết kế để đáp ứng nhu cầu an cư, đầu tư sinh lời và phong cách sống thượng lưu.',
  },
  {
    id: 'faq-2',
    question: 'Tôi có thể nhận thông tin sản phẩm bằng cách nào?',
    answer: 'Quý khách vui lòng để lại thông tin trong biểu mẫu đăng ký tư vấn phía dưới. Chuyên viên tư vấn sẽ liên hệ gửi tài liệu giới thiệu chi tiết, mặt bằng tham khảo và các thông tin cập nhật mới nhất theo đúng dòng sản phẩm mà quý khách quan tâm.',
  },
  {
    id: 'faq-3',
    question: 'Giá trên website đã phải giá bán chính thức chưa?',
    answer: 'Mức giá hiển thị trên website là "Giá tham khảo minh họa" nhằm giúp quý khách hình dung phân khúc định vị của dự án. Bảng giá chính thức, chính sách bán hàng và tiến độ bàn giao sẽ được cập nhật cụ thể khi dự án hoàn tất công tác chuẩn bị triển khai thực tế.',
  },
  {
    id: 'faq-4',
    question: 'Tôi có thể đăng ký lịch tư vấn riêng không?',
    answer: 'Hoàn toàn có thể. Khi gửi thông tin trong biểu mẫu, quý khách có thể ghi chú khung giờ thuận tiện hoặc hình thức trao đổi mong muốn (qua điện thoại hoặc gặp mặt trực tiếp). Đội ngũ tư vấn sẽ liên hệ để xác nhận lịch hẹn chu đáo nhất.',
  },
];
