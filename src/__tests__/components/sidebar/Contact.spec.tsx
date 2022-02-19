import { render } from "@testing-library/react";
import Contact from "../../../components/sidebar/Contact";

describe("Contact", () => {
  const TEST_EMAIL_VAL = "TEST_EMAIL";
  const TEST_PHONE_VAL = "TEST_PHONE";
  const TEST_CONTACT_VAL = "TEST_CONTACT";
  const TEST_ICON_1 = "TEST_ICON_1";
  const TEST_ICON_2 = "TEST_ICON_2";
  const TEST_ICON_3 = "TEST_ICON_3";
  const TEST_EMAIL = { value: TEST_EMAIL_VAL, icon: TEST_ICON_1 };
  const TEST_PHONE = { value: TEST_PHONE_VAL, icon: TEST_ICON_2 };
  const TEST_CONTACT = { value: TEST_CONTACT_VAL, icon: TEST_ICON_3 };

  it("should render without props", () => {
    const { getByTestId, queryAllByTestId } = render(<Contact />);

    expect(getByTestId("contact/container")).toBeDefined();
    expect(queryAllByTestId("contact/item").length).toEqual(0);
    expect(queryAllByTestId("contact/item-icon-anchor").length).toEqual(0);
  });

  it("should render with title", () => {
    const { getByTestId, queryAllByTestId } = render(
      <Contact email={TEST_EMAIL} phone={TEST_PHONE} website={TEST_CONTACT} />
    );

    expect(getByTestId("contact/container")).toBeDefined();
    expect(queryAllByTestId("contact/item").length).toEqual(3);
    expect(queryAllByTestId("contact/item-icon-anchor").length).toEqual(3);
    expect(queryAllByTestId("contact/item-icon").length).toEqual(3);
    expect(queryAllByTestId("contact/item-icon")[0].className).toEqual(
      TEST_ICON_1
    );
    expect(queryAllByTestId("contact/item-icon")[1].className).toEqual(
      TEST_ICON_2
    );
    expect(queryAllByTestId("contact/item-icon")[2].className).toEqual(
      TEST_ICON_3
    );
    expect(queryAllByTestId("contact/item-icon-anchor")[0].textContent).toEqual(
      TEST_EMAIL_VAL
    );
    expect(queryAllByTestId("contact/item-icon-anchor")[0]).toHaveAttribute(
      "href",
      `mailto:${TEST_EMAIL_VAL}`
    );
    expect(queryAllByTestId("contact/item-icon-anchor")[1]).toHaveAttribute(
      "href",
      `tel:${TEST_PHONE_VAL}`
    );
    expect(queryAllByTestId("contact/item-icon-anchor")[2]).toHaveAttribute(
      "href",
      `//${TEST_CONTACT_VAL}`
    );
  });
});
