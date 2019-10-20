export const state = () => ({
  all: [{
    id: "teak_80",
    name: "Teak 80",
    price: "200",
    retailPrice: "999",
    length: "80cm",
    shaftSize: "6-7mm",
    type: "Euro"
  }, {
    id: "teak_100",
    name: "Teak 100",
    price: "200",
    retailPrice: "999",
    length: "100cm",
    shaftSize: "6-7mm",
    type: "Euro"
  }, {
    id: "teak_110",
    name: "Teak 110",
    price: "200",
    retailPrice: "999",
    length: "110cm",
    shaftSize: "6-7mm",
    type: "Euro"
  }, {
    id: "mahogany_100",
    name: "Mahogany 100",
    price: "200",
    retailPrice: "999",
    length: "100cm",
    shaftSize: "6-7mm",
    type: "Mahogany"
  }],
  type: ["Euro", "Mahogany", "Annihilator"]
})

export const getters = () => ({
  euroSpearguns(state, getters) {
    return state.spearguns.filter(speargun => speargun.type === "Euro")
  }
})
