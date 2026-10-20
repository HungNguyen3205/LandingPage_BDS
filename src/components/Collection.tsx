import React, { useState } from 'react';
import { productsData } from '../data/projectData';
import type { ProductCategory, ProductItem } from '../types';
import { ArrowRight, Maximize2, Tag } from 'lucide-react';

interface CollectionProps {
  onSelectProduct: (productName: string) => void;
}

export const Collection: React.FC<CollectionProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<ProductCategory>('all');

  const filteredProducts = productsData.filter((product) => {
    if (activeTab === 'all') return true;
    return product.category === activeTab;
  });

  const handleSelectProduct = (product: ProductItem) => {
    onSelectProduct(product.name);
    const formElement = document.getElementById('lien-he');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bo-suu-tap" className="py-20 lg:py-28 bg-[#F4F1E8] relative">
      <span id="san-pham" className="sr-only" aria-hidden="true" />
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-xl">
            <span className="text-champagne text-xs sm:text-[13px] font-semibold tracking-[0.25em] uppercase block mb-3">
              02 / BỘ SƯU TẬP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-forest leading-[1.2] tracking-tight mb-4">
              Chọn dấu ấn của riêng bạn.
            </h2>
            <p className="text-ink-muted text-base leading-relaxed">
              Tập hợp các không gian sống nghỉ dưỡng giới hạn, được định hình bởi sự tinh tế và tính riêng tư tuyệt đối.
            </p>
          </div>

          {/* Price & Demo disclaimer notice */}
          <div className="mt-6 md:mt-0 flex flex-col md:items-end">
            <span className="inline-flex items-center px-3 py-1 rounded bg-forest/5 border border-forest/10 text-xs text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne mr-2" />
              * Giá trên website là giá tham khảo minh họa
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 sm:space-x-3 mb-10 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Bộ lọc dòng sản phẩm">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-luxury text-sm font-medium tracking-wide transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
              activeTab === 'all'
                ? 'bg-forest text-white shadow-sm'
                : 'bg-white/80 text-ink-muted hover:text-forest hover:bg-white border border-forest/10'
            }`}
          >
            Tất cả ({productsData.length})
          </button>
          
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'villa'}
            onClick={() => setActiveTab('villa')}
            className={`px-5 py-2.5 rounded-luxury text-sm font-medium tracking-wide transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
              activeTab === 'villa'
                ? 'bg-forest text-white shadow-sm'
                : 'bg-white/80 text-ink-muted hover:text-forest hover:bg-white border border-forest/10'
            }`}
          >
            Biệt thự ({productsData.filter(p => p.category === 'villa').length})
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'apartment'}
            onClick={() => setActiveTab('apartment')}
            className={`px-5 py-2.5 rounded-luxury text-sm font-medium tracking-wide transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
              activeTab === 'apartment'
                ? 'bg-forest text-white shadow-sm'
                : 'bg-white/80 text-ink-muted hover:text-forest hover:bg-white border border-forest/10'
            }`}
          >
            Căn hộ ({productsData.filter(p => p.category === 'apartment').length})
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-luxury overflow-hidden border border-forest/10 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Container with gentle zoom on hover */}
              <div className="relative aspect-[16/11] overflow-hidden bg-sand-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-forest-dark/90 backdrop-blur-md text-white text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-sm border border-champagne/30">
                  {product.categoryLabel}
                </div>

                {/* Area Tag */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-forest text-xs font-semibold px-2.5 py-1 rounded flex items-center space-x-1.5 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-champagne" />
                  <span>{product.area}</span>
                </div>
              </div>

              {/* Product Details Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-forest mb-2 group-hover:text-forest-light transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-ink-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-[11px] text-ink-muted bg-sand px-2 py-0.5 rounded border border-forest/5"
                      >
                        <Tag className="w-2.5 h-2.5 mr-1 text-champagne" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-5 border-t border-forest/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-ink-muted">
                      Giá tham khảo
                    </span>
                    <span className="font-serif text-xl font-semibold text-forest">
                      {product.priceNote}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectProduct(product)}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-luxury bg-forest hover:bg-forest-light text-white text-xs sm:text-sm font-medium tracking-wide transition-colors group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  >
                    <span>Nhận thông tin</span>
                    <ArrowRight className="ml-1.5 w-4 h-4 text-champagne transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
