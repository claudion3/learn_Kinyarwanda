export type Game = {
  id: string;
  title: string;
  description: string;
  icon: string;
  component: React.ComponentType<{ onBack: () => void }>;
  bgColor: string;
};