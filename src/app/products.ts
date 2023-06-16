export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = JSON.parse(localStorage.getItem("products") || "[]");


export const addProduct = (object: Object) => {
    products.push(object);
    localStorage.setItem("products", JSON.stringify(products));
    console.log(products);
};

export const editProduct = (id: number, object: Object) => {
    const index = products.findIndex((obj: { id: number; }) => obj.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...object };
        localStorage.setItem("products", JSON.stringify(products));
    }
};

export const deleteProduct = (id: number) => {
    const index = products.findIndex((obj: { id: number; }) => obj.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
    }


};

export const getProduct = (id: number) => {
    const index = products.findIndex((obj: { id: number; }) => obj.id === id);
    return products[index];
};