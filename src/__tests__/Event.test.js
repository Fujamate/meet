import { render } from "@testing-library/react";
import mockData from "../mock-data";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0].items[0];
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });
  test("got event title", () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test("got event created time", () => {
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test("got event location", () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, events details section should be hidden", () => {
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test("shows the details section, when user clicks 'show details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("show details");
    await user.click(button);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hide the details section, when user clicks 'hide details' button", async () => {
    const user = userEvent.setup();
    const showButton = EventComponent.queryByText("show details");
    const hideButton = EventComponent.queryByText("hide details");
    user.click(hideButton);
    expect(showButton).toBeInTheDocument();
    expect(hideButton).not.toBeInTheDocument();
  });
});
