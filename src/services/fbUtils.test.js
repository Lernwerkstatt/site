const fbUtils = require("./fbUtils");

describe("Unify facebook event dates", () => {
  it("should return start and end times for simple events", () => {
    const event = {
      description: "ACHTUNG: Anmeldung nur per Email an andre@govolunteer.com",
      end_time: "2042-02-21T20:00:00+0100",
      name: "Workshop: Wie kann ich meine Zeit besser organisieren?",
      place: {
        name: "Die Lernwerkstatt",
        location: {
          city: "Alt-Treptow",
          country: "Germany",
          latitude: 52.4908,
          longitude: 13.44831,
          street: "Karl-Kunger-Str. 55",
          zip: "12435"
        },
        id: "1396482353993794"
      },
      start_time: "2042-02-21T17:30:00+0100",
      id: "249785849283386"
    };

    const expected = {
      start_time: "2042-02-21T17:30:00+0100",
      end_time: "2042-02-21T20:00:00+0100"
    };
    const actual = fbUtils.extractNearestDate(event);
    expect(actual).toEqual(expected);
  });

  it("should return start and end times for recurring events", () => {
    const event = {
      description: "Sprach-Café Deutsch",
      end_time: "2042-02-27T20:15:00+0100",
      name: "Deutsch spielend reden (Sprach-Café)",
      place: {
        name: "Die Lernwerkstatt",
        location: {
          city: "Alt-Treptow",
          country: "Germany",
          latitude: 52.4908,
          longitude: 13.44831,
          street: "Karl-Kunger-Str. 55",
          zip: "12435"
        },
        id: "1396482353993794"
      },
      start_time: "2042-01-16T18:30:00+0100",
      event_times: [
        {
          id: "367250620715595",
          start_time: "2042-02-27T18:30:00+0100",
          end_time: "2042-02-27T20:15:00+0100"
        },
        {
          id: "367250610715596",
          start_time: "2042-02-06T18:30:00+0100",
          end_time: "2042-02-06T20:15:00+0100"
        },
        {
          id: "367250614048929",
          start_time: "2042-09-16T18:30:00+0100",
          end_time: "2042-09-16T20:15:00+0100"
        }
      ],
      id: "367250607382263"
    };

    const expected = {
      start_time: "2042-02-06T18:30:00+0100",
      end_time: "2042-02-06T20:15:00+0100"
    };
    const actual = fbUtils.extractNearestDate(event);
    expect(actual).toEqual(expected);
  });
});

describe("Stringify event date and time", () => {
  it("should return as is, if lasts longer than a day", () => {
    const eventDate = {
      start_time: "2042-02-27T18:30:00+0100",
      end_time: "2042-03-01T10:10:00+0100"
    };

    const expected = "27.02.2042 18:30 - 01.03.2042 10:10";
    const actual = fbUtils.stringifyEventDate(eventDate);
    expect(actual).toEqual(expected);
  });
  it("should return simplified date", () => {
    const eventDate = {
      start_time: "2042-02-27T18:30:00+0100",
      end_time: "2042-02-27T20:15:00+0100"
    };

    const expected = "27.02.2042 18:30 - 20:15";
    const actual = fbUtils.stringifyEventDate(eventDate);
    expect(actual).toEqual(expected);
  });
});

describe("Create link", () => {
  it("should create a link", () => {
    const id = "313587609361599";

    const expected = "https://www.facebook.com/events/313587609361599";
    const actual = fbUtils.createEventLink(id);
    expect(actual).toEqual(expected);
  });
});
