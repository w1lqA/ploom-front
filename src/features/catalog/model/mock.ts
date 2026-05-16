
export const mockCatalogProducts = [
    {
        id: 1,
        title: "Брелок черемша",
        description: "Узнаваемый силуэт черемши. Модель для 3D-печати. Подходит для брелока, сувенира или награды.",
        image: "https://ik.imagekit.io/evgvyfaav/Screenshot%202026-05-16%20032915.png",

        modelUrl: "https://v3b.fal.media/files/b/0a9a5ea1/axJ8l-y39qANFlFt9Ck5o_model.glb",
        date: "2024-01-12",
        category: "animals",
        status: 'in-stock' as const,
        price: 99999
    },
    {
        id: 2,
        title: "Брелок пончика",
        description: "Самая узнаваемая модель в 3D, подойдет для подарка",
        image: "https://ik.imagekit.io/evgvyfaav/Screenshot%202026-05-16%20032622.png",
        modelUrl: "https://v3b.fal.media/files/b/0a9a5d3d/zO7aCrArLeeETC1rntdf5_model.glb",

        date: "2024-01-08",
        category: "food",
        status: 'out-of-stock' as const,
        price: 1200
    },
    {
        id: 3,
        title: "Брелок \"Яичница в сковородке\"",
        description: "Веселая 3D-модель для печати. Идеальная детализация: яйцо глазунья на чугунной сковороде",
        image: "https://ik.imagekit.io/evgvyfaav/Screenshot%202026-05-16%20032906.png",
        modelUrl: "https://v3b.fal.media/files/b/0a9a5ee2/hF9r2aU3DoTD8vOUaQmle_model.glb",
        date: "2024-01-05",
        category: "objects",
        status: 'to-order' as const,
        price: 500
    }
];