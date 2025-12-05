import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getApi } from "../utils/api";
import { translateCountry } from "../utils/translateCountry";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const [order, setOrder] = useState(state?.order || null);
  const [loading, setLoading] = useState(!state?.order);
  const [error, setError] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  // načtení objednávky
  useEffect(() => {
    if (!order) {
      setLoading(true);
      getApi(`/api/order/${id}`)
        .then((data) => setOrder(data))
        .catch(() => setError("Objednávku se nepodařilo načíst."))
        .finally(() => setLoading(false));
    }
  }, [id, order]);

  // načtení kurzu EUR
  useEffect(() => {
    fetch("https://data.kurzy.cz/json/meny/b[1].json")
      .then(res => res.json())
      .then(data => {
        if (data?.kurzy?.EUR?.dev_stred) {
          setExchangeRate(Number(data.kurzy.EUR.dev_stred));
        } else {
          console.error("EUR kurz nenalezen v JSON");
        }
      })
      .catch(err => console.error("Chyba při načítání kurzu:", err));
  }, []);

 
  if (loading) return <div className="container mt-5">Načítám objednávku…</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;
  if (!order) return <div className="container mt-5 text-danger">Objednávka nenalezena.</div>;

  const totalCZK = order?.totalVatPrice;
  const totalEUR = exchangeRate && order ? (totalCZK / exchangeRate).toFixed(2) : "-";

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>Děkujeme za objednávku</h3>
        </div>
        <div className="card-body">
          <p><strong>Číslo objednávky:</strong> {order.orderNumber}</p>
          <hr />
          <h5>Produkt</h5>
          <p>
            <strong>{order.product.name}</strong><br />
            Cena za ks: {order.product.unitPrice?.toFixed(2)} Kč bez DPH<br />
            Počet: {order.productCount}<br />
            Celkem bez DPH: {order.totalPrice?.toFixed(2)} Kč<br />
            DPH: {order.totalVat?.toFixed(2)} Kč<br /><br />
            <strong>Celkem s DPH:</strong> {totalCZK.toFixed(2)} Kč<br />
            <strong>Celkem v EUR:</strong> {totalEUR} €
          </p>
          <hr />
          <h5>Zákazník</h5>
          <p>
            {order.customer.firstName} {order.customer.lastName}<br />
            {order.customer.street}<br />
            {order.customer.zipCode} {order.customer.city}<br />
            {translateCountry(order.customer.country)}<br />
            Email: {order.customer.email}<br />
            Telefon: {order.customer.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
