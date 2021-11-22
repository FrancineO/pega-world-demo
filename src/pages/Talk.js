import TalkItem from "../components/talk-item/TalkItem";

const DUMMY_DATA = {
  id: 0,
  title: "The Power to Simplify: What You Need to Crush Complexity",
  speakerPicture:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  speakerName: " Alan Trefler,",
  speakerJob: "CEO & Founder",
  duration: 15,
  description:
    "At Pega, we put you in control of your business. Together, we can simplify experiences for customers, employees, and developers. And we’re innovating for an even more transformative future. To kick off the event, join Pega CEO and Founder, Alan Trefler, as he talks about crushing business complexity and building for lasting success by bringing together three critical elements: the right way to frame the opportunity, the right architecture to support it, and the right approach to implementation.",
};

function Talk() {
  return (
    <div>
      <TalkItem
        title={DUMMY_DATA.title}
        speakerName={DUMMY_DATA.speakerName}
        speakerJob={DUMMY_DATA.speakerJob}
        speakerPicture={DUMMY_DATA.speakerPicture}
        description={DUMMY_DATA.description}
        duration={DUMMY_DATA.duration}
      ></TalkItem>
    </div>
  );
}
export default Talk;
