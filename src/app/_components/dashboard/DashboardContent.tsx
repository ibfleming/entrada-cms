import "./styles/DashboardSubMenu.css";

interface DashboardContentProp {
  moduleItem: string | undefined;
}

export default function DashboardContent({ moduleItem }: DashboardContentProp) {
  return <section>Hello {moduleItem}</section>;
}
