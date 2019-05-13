const addSummary = require("./addSummary");

describe("function should get the summary of a blogpost", () => {
  const originalData = [
    {
      content:
        "Wenn ihr öfters in die Lernwerkstatt kommt, seid ihr vielleicht schon mal Janina begegnet. Sie bietet manchmal spontane Gesprächszeit an, besucht einen Koch-Abend, oder arbeitet gerade mit unserer Bürokollegin Carla bei Lakunabi. Wir teilen mit Janina eine Vorstellung von freier Bildung, praktizierter Schenkökonomie und nachhaltigem Leben. Heute hat sie ein Geschenk für euch: Ich habe vor einem Jahr meine Lebenshaltungskosten auf gegen Null reduziert. Der letzte dafür notwendige Schritt war, meinen Mietvertrag zu kündigen und meinen Besitz wegzugeben. Ich habe in diesem Jahr einen großen inneren Wandel vollzogen. Ich erlebte Ängste und Komplexe und ließ sie hinter mir. Ich suchte den Sinn und fand ihn im Moment. Ich erlebte spirituelles Wachstum. In Gesprächen mit meinen Gastgebern (in deren Küchen und Wohnzimmern) erlebte ich immer wieder, dass meine Lebensart und die daraus gewonnenen Erkenntnisse sie inspirieren konnten. Daher biete ich, ganz im Sinne der von mir praktizierten Schenkökonomie, die Wohnzimmer-Gespräche als Geschenk an."
    }
  ];

  const expectedData = [
    {
      content:
        "Wenn ihr öfters in die Lernwerkstatt kommt, seid ihr vielleicht schon mal Janina begegnet. Sie bietet manchmal spontane Gesprächszeit an, besucht einen Koch-Abend, oder arbeitet gerade mit unserer Bürokollegin Carla bei Lakunabi. Wir teilen mit Janina eine Vorstellung von freier Bildung, praktizierter Schenkökonomie und nachhaltigem Leben. Heute hat sie ein Geschenk für euch: Ich habe vor einem Jahr meine Lebenshaltungskosten auf gegen Null reduziert. Der letzte dafür notwendige Schritt war, meinen Mietvertrag zu kündigen und meinen Besitz wegzugeben. Ich habe in diesem Jahr einen großen inneren Wandel vollzogen. Ich erlebte Ängste und Komplexe und ließ sie hinter mir. Ich suchte den Sinn und fand ihn im Moment. Ich erlebte spirituelles Wachstum. In Gesprächen mit meinen Gastgebern (in deren Küchen und Wohnzimmern) erlebte ich immer wieder, dass meine Lebensart und die daraus gewonnenen Erkenntnisse sie inspirieren konnten. Daher biete ich, ganz im Sinne der von mir praktizierten Schenkökonomie, die Wohnzimmer-Gespräche als Geschenk an.",
      summary:
        "Wenn ihr öfters in die Lernwerkstatt kommt, seid ihr vielleicht schon mal Janina begegnet. Sie bietet manchmal spontane Gesprächszeit an, besucht einen Koch-Abend, oder arbeitet gerade mit unserer Bürokollegin Carla bei Lakunabi. Wir teilen mit Janina eine Vorstellung von freier Bildung, praktizierter Schenkökonomie und ..."
    }
  ];

  const falseData = [
    {
      content:
        "Wenn ihr öfters in die Lernwerkstatt kommt, seid ihr vielleicht schon mal Janina begegnet. Sie bietet manchmal spontane Gesprächszeit an, besucht einen Koch-Abend, oder arbeitet gerade mit unserer Bürokollegin Carla bei Lakunabi. Wir teilen mit Janina eine Vorstellung von freier Bildung, praktizierter Schenkökonomie und nachhaltigem Leben. Heute hat sie ein Geschenk für euch: Ich habe vor einem Jahr meine Lebenshaltungskosten auf gegen Null reduziert. Der letzte dafür notwendige Schritt war, meinen Mietvertrag zu kündigen und meinen Besitz wegzugeben. Ich habe in diesem Jahr einen großen inneren Wandel vollzogen. Ich erlebte Ängste und Komplexe und ließ sie hinter mir. Ich suchte den Sinn und fand ihn im Moment. Ich erlebte spirituelles Wachstum. In Gesprächen mit meinen Gastgebern (in deren Küchen und Wohnzimmern) erlebte ich immer wieder, dass meine Lebensart und die daraus gewonnenen Erkenntnisse sie inspirieren konnten. Daher biete ich, ganz im Sinne der von mir praktizierten Schenkökonomie, die Wohnzimmer-Gespräche als Geschenk an.",
      summary:
        "Wenn ihr öfters in die Lernwerkstatt kommt, seid ihr vielleicht schon mal Janina begegnet. Sie bietet manchmal spontane Gesprächszeit an, besucht einen Koch-Abend, oder arbeitet gerade mit unserer Bürokollegin Carla bei Lakunabi. Wir teilen mit Janina eine Vorstellung von freier Bildung, praktizierter Schenkökonomie und"
    }
  ];

  test("add Summary", () => {
    expect(addSummary(originalData)).toEqual(expectedData);
    expect(addSummary(originalData)).not.toEqual(falseData);
  });
});
