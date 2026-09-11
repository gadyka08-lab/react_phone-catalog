import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import { BrandNewModels } from '../../components/BrandNewModels/BrandNewModels';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPrice } from '../../components/HotPrice/HotPrice';
import { Product } from '../../types/Product';

interface HomePageProps {
  products: Product[];
}

export const HomePage = ({ products }: HomePageProps) => {
  return (
    <>
      <BannerSlider />
      <BrandNewModels products={products} />
      <ShopByCategory />
      <HotPrice products={products} />
    </>
  );
};
