import React, { useEffect, useState } from "react"
import Filter from '../Filter/Filter'
import TicketList from '../TicketList'
import "./App.css"

interface Ticket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [currency, setCurrency] = useState<string>("RUB");
  useEffect(() => {
    setTimeout(() => {
      fetch("./tickets.json")
        .then((res) => res.json())
        .then((data) => {
          setTickets(data);
          setFilteredTickets(data);
        })
        .catch((error) => console.error("Ошибка загрузки данных:", error));
    }, 2000);
  }, []);
  const handleFilter = (stops: number[]) => {
    const updatedTickets =
      stops.length === 0
        ? tickets
        : tickets.filter((ticket) => stops.includes(ticket.stops));
    setFilteredTickets(updatedTickets);
  };
  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  return (
    <div className="app-container">
      <Filter
        onFilterChange={handleFilter}
        onCurrencyChange={handleCurrencyChange}
        selectedCurrency={currency}
      />
      <TicketList tickets={filteredTickets} currency={currency} />
    </div>
  );
};

export default App;
