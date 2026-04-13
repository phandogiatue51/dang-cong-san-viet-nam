import { mindMapData } from "@/data/mindMapData";
import MindMapNode from "@/components/MindMapNode";
import SectionWrapper from "./SectionWrapper";

const MindMapSection = () => (
  <SectionWrapper
    id="mind-map"
    title="Bản đồ tư duy tổng hợp"
    subtitle="Nhấn vào từng nhánh để khám phá chi tiết"
    variant="muted"
  >
    <MindMapNode node={mindMapData} />
  </SectionWrapper>
);

export default MindMapSection;
