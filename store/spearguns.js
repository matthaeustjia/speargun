export const state = () => ({
  all: [{
    id: "teak_80",
    name: "Teak 80",
    price: "200",
    retailPrice: "999",
    type: "Euro",
    desc: {
      length: "80cm barrel length",
      materials: "3 vertical laminate teak stock",
      shaftSize: "Comes with rob allen 7mm shaft. Accepting up to (8mm) diameter spearshaft.",
      rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
      trigger: "Reverse Mechanism w/ Stainless Steel",
      handle: "Comfortable and ergonomic handle"

    }
  }, {
    id: "teak_100",
    name: "Teak 100",
    price: "350",
    retailPrice: "999",
    shaftSize: "6-7mm",
    type: "Euro",
    desc: {
      length: "100cm  barrel length",
      materials: "3 vertical laminate teak stock",
      shaftSize: "Comes with rob allen 7mm shaft. Accepting up to (8mm) diameter spearshaft.",
      rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
      trigger: "Reverse Mechanism w/ Stainless Steel",
      handle: "Comfortable and ergonomic handle"

    }
  }, {
    id: "teak_110",
    name: "Teak 110",
    price: "450",
    retailPrice: "999",
    shaftSize: "6-7mm",
    type: "Euro",
    desc: {
      length: "110cm  barrel length",
      materials: "3 vertical laminate teak stock",
      shaftSize: "Comes with rob allen 7mm shaft. Accepting up to (8mm) diameter spearshaft.",
      rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
      trigger: "Reverse Mechanism w/ Stainless Steel",
      handle: "Comfortable and ergonomic handle"

    }
  }, {
    id: "mahogany_100",
    name: "Mahogany 100",
    price: "200",
    retailPrice: "999",
    shaftSize: "6-7mm",
    type: "Mahogany",
    desc: {
      length: "80cm  barrel length",
      materials: "3 vertical laminate teak stock",
      shaftSize: "Comes with rob allen 7mm shaft. Accepting up to (8mm) diameter spearshaft.",
      rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
      trigger: "Reverse Mechanism w/ Stainless Steel",
      handle: "Comfortable and ergonomic handle"

    }
  }],
  type: ["Euro", "Mahogany", "Annihilator"]
})

export const getters = () => ({
  euroSpearguns(state, getters) {
    return state.spearguns.filter(speargun => speargun.type === "Euro")
  }
})
