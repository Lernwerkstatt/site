const events = require("./events.js");

describe("Unify facebook event dates", () => {
  it("should return start and end times for simple events", () => {
    const event = {
      description: "ACHTUNG: Anmeldung nur per Email an andre@govolunteer.com",
      end_time: "2019-02-21T20:00:00+0100",
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
      start_time: "2019-02-21T17:30:00+0100",
      id: "249785849283386"
    };

    const expected = {
      start_time: "2019-02-21T17:30:00+0100",
      end_time: "2019-02-21T20:00:00+0100"
    };
    const actual = events.extractNearestDate(event);
    expect(actual).toEqual(expected);
  });
});
