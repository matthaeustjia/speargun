export const state = () => ({
  all: [{
      id: "euro_80",
      name: "Euro 80",
      price: "500",
      retailPrice: "899",
      stock: '1',
      type: "Euro",
      images: ["speargun/1.gif", "speargun/2.gif", "speargun/2.gif"],
      desc: ["Bajoo euro speargun combies the great features and advantages of wooden speargun without breaking the bank.",
        "bla bla bla",
        "bla bla bla",
        "bla bla bla",
        "bla bla bla",
        "bla bla bla",
        "bla bla bla"

      ],
      features: {
        length: "80cm barrel length",
        materials: "3 vertical laminate teak stock",
        shaftSize: "Comes with rob allen 7mm shaft. Accepting up to (8mm) diameter spearshaft.",
        rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
        trigger: "Reverse trigger mechanism w/ Stainless Steel for an additional 5cm of band stretch",
        handle: "Comfortable and ergonomic handle"

      }
    },
    {
      id: "euro_100",
      name: "Euro 100",
      price: "500",
      retailPrice: "949",
      stock: '1',
      type: "Euro",
      images: ["speargun/1.gif", "speargun/2.gif", "speargun/2.gif"],
      features: {
        length: "100cm  barrel length",
        materials: "3 vertical laminate teak stock",
        shaftSize: "Comes with rob allen 7mm shaft. Accepting up to (8mm) diameter spearshaft.",
        rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
        trigger: "Reverse trigger mechanism w/ Stainless Steel for an additional 5cm of band stretch",
        handle: "Comfortable and ergonomic handle"

      }
    },
    {
      id: "euro_110",
      name: "Euro 110",
      price: "550",
      retailPrice: "999",
      type: "Euro",
      stock: '0',
      images: ["speargun/1.gif", "speargun/1.gif", "speargun/1.gif", "speargun/2.gif", "speargun/2.gif"],
      features: {
        length: "110cm  barrel length",
        materials: "3 vertical laminate teak stock",
        shaftSize: "Comes with rob allen 7mm shaft. Accepting up to (8mm) diameter spearshaft.",
        rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
        trigger: "Reverse trigger mechanism w/ Stainless Steel for an additional 5cm of band stretch",
        handle: "Comfortable and ergonomic handle"

      }
    }, {
      id: "teak_100",
      name: "Teak 100",
      price: "700",
      retailPrice: "1499",
      type: "Teak",
      stock: '0',
      images: ["speargun/1.gif", "speargun/2.gif", "speargun/2.gif"],
      features: {
        length: "100cm  barrel length",
        materials: "5 vertical laminate highest quality teak stock. The wood will be taken from tree that is at least 40years old.",
        shaftSize: "Comes with rob allen 7.5mm shaft. Accepting up to (8mm) diameter spearshaft.",
        rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
        trigger: "Reverse trigger mechanism w/ Stainless Steel for an additional 5cm of band stretch",
        handle: "Comfortable and ergonomic handle"

      }
    }, {
      id: "bluewater_140",
      name: "Bluewater 140",
      price: "700",
      retailPrice: "1499",
      type: "Bluewater",
      stock: '0',
      images: ["speargun/1.gif", "speargun/2.gif", "speargun/2.gif"],
      features: {
        length: "100cm  barrel length",
        materials: "5 vertical laminate highest quality teak stock. The wood will be taken from tree that is at least 40years old.",
        shaftSize: "Comes with rob allen 7.5mm shaft. Accepting up to (8mm) diameter spearshaft.",
        rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
        trigger: "Reverse trigger mechanism w/ Stainless Steel for an additional 5cm of band stretch",
        handle: "Comfortable and ergonomic handle"

      }
    },
    {
      id: "bluewater_160",
      name: "Bluewater 160",
      price: "700",
      retailPrice: "1499",
      type: "Bluewater",
      stock: '0',
      images: ["speargun/1.gif", "speargun/2.gif", "speargun/2.gif"],
      features: {
        length: "100cm  barrel length",
        materials: "5 vertical laminate highest quality teak stock. The wood will be taken from tree that is at least 40years old.",
        shaftSize: "Comes with rob allen 7.5mm shaft. Accepting up to (8mm) diameter spearshaft.",
        rubbers: "2x16mm rubber. Can be replaced with 3x14mm rubber",
        trigger: "Reverse trigger mechanism w/ Stainless Steel for an additional 5cm of band stretch",
        handle: "Comfortable and ergonomic handle"

      }
    }
  ],
  type: [{
    name: "Euro",
    img: "/"
  }, {
    name: "Teak",
    img: "/"
  }, {
    name: "Bluewater",
    img: "/"
  }]
})

export const getters = () => ({
  euroSpearguns(state, getters) {
    return state.spearguns.filter(speargun => speargun.type === "Euro")
  }
})
