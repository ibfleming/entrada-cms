import "./styles/Content.css";
import contentData from "./data/applicantData";

interface DashboardContentProp {
  moduleItem: string | undefined;
}

export default function DashboardContent({ moduleItem }: DashboardContentProp) {
  const selectedContent = contentData.find((item) => item.name === moduleItem);

  return (
    <section className="content">
      <div className="content-wrapper">
        <h1 className="content-label">{selectedContent?.label}</h1>
        <h2 className="content-info">{selectedContent?.info}</h2>
        <data>data...</data>
      </div>
    </section>
  );
}
