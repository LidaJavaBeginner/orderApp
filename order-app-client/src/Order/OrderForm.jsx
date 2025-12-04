import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getApi, postApi } from "../utils/api";
import FlashMessage from "../components/flashMessage";
import InputSelect from "../components/InputSelect";
import InputField from "../components/InputField";


const OrderForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [order, setOrder] = useState({

        "customerDTO": {
            "firstName": "",
            "lastName": "",
            "email": "",
            "phoneNumber": "",
            "street": "",
            "city": "",
            "zipCode": "",
            "country": ""
        },
        "orderDTO": {
            "product": {
                "id": ""
            },
            "productCount": 1
        }
    });


    const [errorState, setError] = useState(null);
    const [productList, setProductList] = useState([]);
    const [selectedProductPrice, setSelectedProductPrice] = useState(0);
    const [productCount, setProductCount] = useState(1);

    useEffect(() => {
        getApi("/api/products").then((data) => setProductList(data));
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        postApi("/api/order", order)
            .then((data) => {
                console.log("Data ze serveru: ", data)
               
                navigate(`/order/${data.id}`, {
                    state: { order: data }
                });
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    };

    
    // Výpočet ceny
    const totalExclVAT = selectedProductPrice * productCount;
    const totalInclVAT = totalExclVAT * 1.21;



    return (
        <div className="form-group">
            <h1>Nová objednávka</h1>
            <hr />
            {errorState ? (
                <div className="alert alert-danger">{errorState}</div>
            ) : null}
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="form-group">
                            <form onSubmit={handleSubmit}>

                                <InputSelect
                                    name="product"
                                    label="Produkt"
                                    prompt="Vyberte produkt"
                                    value={order.orderDTO?.product?.id || ""}
                                    items={productList}
                                    handleChange={(e) => {
                                        const selected = productList.find(p => p.id === Number(e.target.value));
                                        setOrder({
                                            ...order,
                                            orderDTO: {
                                                ...order.orderDTO,
                                                product: {
                                                    ...order.orderDTO.product,
                                                    id: selected.id
                                                }
                                            }
                                        });
                                        setSelectedProductPrice(selected.unitPrice);
                                    }}
                                />


                                <InputField
                                    type="number"
                                    label="Počet produktů"
                                    name="productCount"
                                    prompt="Zadejte počet produktů"
                                    value={order.orderDTO?.productCount || 1}
                                    handleChange={(e) => {
                                        const count = Number(e.target.value);
                                        setOrder({
                                            ...order,
                                            orderDTO: {
                                                ...order.orderDTO,
                                                productCount: count
                                            }
                                        });
                                        setProductCount(count);
                                    }}
                                />



                                <div className="mb-3">
                                    <label className="form-label">Cena celkem:</label>
                                    <div>
                                        Bez DPH: {selectedProductPrice > 0 ? totalExclVAT.toFixed(2) : 0} Kč <br />
                                        S DPH: {selectedProductPrice > 0 ? totalInclVAT.toFixed(2) : 0} Kč
                                    </div>
                                </div>





                                <InputField
                                    type="text"
                                    label="Křestní jméno"
                                    name="firstName"
                                    prompt="Zadejte křestní jméno"
                                    value={order.customerDTO.firstName}
                                    required
                                    minLength={2}
                                    pattern="^[A-Za-zÀ-ž\s'-]+$"
                                    handleChange={(e) =>
                                        setOrder({
                                            ...order,
                                            customerDTO: { ...order.customerDTO, firstName: e.target.value },
                                        })
                                    }
                                />


                                <InputField
                                    type="text"
                                    label="Příjmení"
                                    name="lastName"
                                    prompt="Zadejte příjmení"
                                    value={order.customerDTO.lastName}
                                    required
                                    minLength={2}
                                    pattern="^[A-Za-zÀ-ž\s'-]+$"
                                    handleChange={(e) =>
                                        setOrder({
                                            ...order,
                                            customerDTO: { ...order.customerDTO, lastName: e.target.value },
                                        })
                                    }
                                />


                                <InputField
                                    type="text"
                                    label="Email"
                                    name="email"
                                    prompt="Zadejte email"
                                    value={order.customerDTO.email}
                                    required
                                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                    handleChange={(e) =>
                                        setOrder({
                                            ...order,
                                            customerDTO: { ...order.customerDTO, email: e.target.value },
                                        })
                                    }
                                />


                                <InputField
                                    type="text"
                                    label="Telefon"
                                    name="phoneNumber"
                                    prompt="Zadejte telefon"
                                    value={order.customerDTO.phoneNumber}
                                    required
                                    pattern="^\+?\d{9,15}$"
                                    handleChange={(e) =>
                                        setOrder({
                                            ...order,
                                            customerDTO: { ...order.customerDTO, phoneNumber: e.target.value },
                                        })
                                    }
                                />


                                <InputField
                                    type="text"
                                    label="Ulice"
                                    name="street"
                                    prompt="Zadejte ulici"
                                    value={order.customerDTO.street}
                                    required
                                    minLength={2}
                                    handleChange={(e) =>
                                        setOrder({
                                            ...order,
                                            customerDTO: { ...order.customerDTO, street: e.target.value },
                                        })
                                    }
                                />


                                <InputField
                                    type="text"
                                    label="Město"
                                    name="city"
                                    prompt="Zadejte město"
                                    value={order.customerDTO.city}
                                    required
                                    minLength={2}
                                    handleChange={(e) =>
                                        setOrder({
                                            ...order,
                                            customerDTO: { ...order.customerDTO, city: e.target.value },
                                        })
                                    }
                                />


                                <InputField
                                    type="text"
                                    label="PSČ"
                                    name="zipCode"
                                    prompt="Zadejte PSČ"
                                    value={order.customerDTO.zipCode}
                                    required
                                    pattern="^\d{5}$"
                                    handleChange={(e) =>
                                        setOrder({
                                            ...order,
                                            customerDTO: { ...order.customerDTO, zipCode: e.target.value },
                                        })
                                    }
                                />
                                <div className="mb-3">
                                    <label className="form-label">Země</label>
                                    <select
                                        className="form-select"
                                        value={order.customerDTO.country}
                                        required
                                        onChange={(e) =>
                                            setOrder({
                                                ...order,
                                                customerDTO: { ...order.customerDTO, country: e.target.value },
                                            })
                                        }
                                    >
                                        <option value="">Vyberte zemi</option>
                                        <option value="CZECHIA">Česká republika</option>
                                        <option value="SLOVAKIA">Slovensko</option>
                                    </select>
                                </div>



                                <input type="submit" className="btn btn-primary" value="Uložit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default OrderForm;
