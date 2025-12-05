# orderApp
Jednoduchá aplikace pro tvorbu objednávek. Umožní zákazníkovi vybrat produkt, zadat množství a osobní údaje. Po odeslání se zobrazí děkovací stránka s rekapitulací objednávky s přepočtem ceny dle kusů, výpočtem DPH a převodem na €.

Tento projekt obsahuje **backend** ve Spring Boot (Java) a **frontend** v Reactu (Vite).  
Struktura repozitáře:
Objednávkový systém/
├── order-app-client/  (React frontend)
├── order-app-server/  (Spring Boot backend)
├── database/ (databáze s produkty)

## Požadavky

- Java 17+ (pro backend)
- Maven (pro backend)
- Node.js 18+ (pro frontend)
- npm nebo yarn (pro frontend)

## Backend (Spring Boot)

Nainstaluj maven závislosti.
Aplikace poběží na http://localhost:8080

## Frontend (React / Vite)

Přejdi do složky frontend:
cd frontend
Nainstaluj závislosti:
npm install
Spusť vývojový server:
npm run dev
Frontend poběží na http://localhost:5173 a bude komunikovat s backendem.

## Databáze

V projektu je složka `database`, která obsahuje export databáze ve formátu SQL pro import databáze produktů.
