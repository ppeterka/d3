import "locale";

var d3_locale_huHU = d3.locale({
  decimal: ",",
  thousands: ".",
  grouping: [3],
  currency: ["", " Ft"],
  dateTime: "%Y. %B %e., %A %X",
  date: "%Y.%m.%d",
  time: "%H:%M:%S",
  periods: ["AM", "PM"], // unused
  days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
  shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
  shortMonths: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szept", "Okt", "Nov", "Dec"]
});
