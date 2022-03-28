export const cartSummaryState = {
    unlimited: {
      quantity: 0,
    },
    bytheGig: {
      selection: {
        name: "1 GB",
        id: 2,
        unitPrice: "$150",
      },
      quantity: 1,
    },
    byod: {
      quantity: 1,
    },
    devices: [
      {
        deviceDetails: {
          productCode: "a2482-iphone-13",
          name: "iPhone 13",
          paymentOptions: {
            id: 1,
            name: "onetime",
            price: "1000",
          },
        },
        quantity: 1,
      },
      {
        deviceDetails: {
          productCode: "123-motorola-13",
          name: "Motorola",
          paymentOptions: {
            id: 1,
            name: "recurring",
            price: "45",
            term: "24 months",
          },
        },
        quantity: 1,
      },
    ],
    savings: {
      currentMonthlyBill: "350",
      currentMobileProvider: {
        name: "AT&T",
        id: 1,
      },
    },
    cartSummary: {
      items: [
        {
          name: "",
          mrc: "",
          nrc: "",
        },
      ],
      totalMrc: "30",
      totalNrc: "40",
      totalSavingsPerMonth: "155",
      totalSavingsPerYear: "1860",
    },
  };
