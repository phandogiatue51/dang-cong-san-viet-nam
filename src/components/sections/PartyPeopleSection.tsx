import SectionWrapper from "./SectionWrapper";

const PartyPeopleSection = () => (
  <SectionWrapper
    id="dang-dan"
    title="IV. Mối Quan hệ giữa Đảng và Nhân dân"
    subtitle="Hồ Chí Minh nhấn mạnh rằng Đảng là một bộ phận của dân tộc, không phải là người cai trị."
  >
    <div className="space-y-6">
      <blockquote className="text-center text-lg italic text-foreground font-medium">
        "Đảng Cộng sản Việt Nam không phải trên trời sa xuống.
        <br />
        Nó ở trong xã hội mà ra."
      </blockquote>

      <div className="relative rounded-2xl overflow-hidden border border-border">
        <img
          src="/images/bachovabodoi2.png"
          alt="Đảng gắn bó với nhân dân"
          className="w-full h-56 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/35 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-primary-foreground font-semibold text-base md:text-lg">
            Chính danh của Đảng được xây dựng từ niềm tin của nhân dân
          </p>
          <p className="text-primary-foreground/80 text-sm mt-1">
            Dân tin, dân yêu, dân kính, dân phục là thước đo bền vững nhất.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card rounded-xl p-6 border border-border">
          <h4 className="font-semibold text-primary mb-3">Lãnh đạo là đầy tớ</h4>
          <p className="text-sm text-muted-foreground">
            Cán bộ là đầy tớ của nhân dân, không phải người tìm kiếm địa vị hay đặc quyền. Hồ Chí Minh cảnh báo nghiêm khắc về căn bệnh quan cách mạng.
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <h4 className="font-semibold text-primary mb-3">Trách nhiệm trước quần chúng</h4>
          <p className="text-sm text-muted-foreground">
            Nếu Đảng không mang lại tự do và hạnh phúc thiết thực cho dân như ăn, mặc, học hành thì độc lập cũng không còn ý nghĩa.
          </p>
        </div>
      </div>

      <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
        <h4 className="font-semibold text-primary mb-2">Sức mạnh của lòng tin nhân dân</h4>
        <p className="text-sm text-foreground mb-3">
          Tính chính danh của Đảng dựa trên nền tảng Dân tin, dân yêu, dân kính, dân phục.
        </p>
        <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-3 mb-3">
          "Nếu nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
        </blockquote>
        <blockquote className="text-sm italic text-primary font-medium border-l-2 border-primary/30 pl-3">
          "Đảng không phải làm quan, sai khiến quần chúng mà phải làm đầy tớ cho quần chúng và phải làm cho ra trò, nếu không quần chúng sẽ đá đít."
        </blockquote>
        <p className="text-sm text-muted-foreground mt-3">
          Cảnh báo này cho thấy mối quan hệ giữa Đảng và nhân dân là điều kiện sống còn, không chỉ là khẩu hiệu chính trị.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default PartyPeopleSection;
