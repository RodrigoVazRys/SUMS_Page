
import Card from '../atoms/Card';

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="min-h-[112px]">
      <strong className="block text-sums-burgundy text-[18px] leading-[1.1] mb-[8px]">{title}</strong>
      <span className="text-sums-muted text-[13px] font-bold">{description}</span>
    </Card>
  );
}
