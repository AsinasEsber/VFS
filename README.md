# Vehicle Fleet Scheduler

Ein professionelles System zur Verwaltung von Fahrzeugflotten, entwickelt mit Next.js und Material-UI. Das System ermöglicht eine effiziente und übersichtliche Planung von Fahrzeugbuchungen durch eine moderne Benutzeroberfläche.

## 📋 Inhaltsverzeichnis
- [Projektübersicht](#projektübersicht)
- [Kernfunktionen](#kernfunktionen)
- [Technische Basis](#technische-basis)
- [Systemvoraussetzungen](#systemvoraussetzungen)
- [Installation](#installation)
- [Projektstruktur](#projektstruktur)
- [Komponenten](#komponenten)
- [Entwicklung](#entwicklung)
- [Lizenz](#lizenz)

## 🚀 Projektübersicht

Das Vehicle Fleet Scheduler System bietet eine moderne Benutzeroberfläche zur Verwaltung von Fahrzeugflotten. Es ermöglicht die Visualisierung und Planung von Fahrzeugbuchungen in verschiedenen Zeitansichten (Tag, Woche, Monat) mit einem interaktiven Gantt-Chart.

## ✨ Kernfunktionen

- **Flexible Zeitansichten:**
  - Tagesübersicht
  - Wochenplanung
  - Monatsplanung

- **Umfangreiche Filtermöglichkeiten:**
  - Kategorisierung nach Fahrzeugtypen
  - Filterung nach Buchungsstatus
  - Dynamische Aktualisierung der Ansichten

- **Fahrzeugverwaltung:**
  - Verschiedene Fahrzeugkategorien (PKW, LKW, Transporter, Bus, Sonderfahrzeuge)
  - Übersichtliche Buchungsverwaltung

- **Buchungssystem:**
  - Status-Tracking (Bestätigt, Ausstehend, Abgeschlossen)
  - Zeitbasierte Planung
  - Visuelle Darstellung im Gantt-Chart

## 🛠 Technische Basis

- **Frontend-Framework:** Next.js
- **UI-Komponenten:** Material-UI (MUI)
- **Programmierung:** TypeScript
- **Zeitmanagement:** date-fns
- **Visualisierung:** Eigene Gantt-Chart Komponenten

## 💻 Systemvoraussetzungen

- **Node.js:** Version 18.x oder höher
- **npm** oder **yarn** als Paketmanager
- Moderne Webbrowser (Chrome, Firefox, Safari, Edge)

## ⚙️ Installation

1. **Node.js Installation**
   ```bash
   # Für Windows: Herunterladen und Installieren von nodejs.org
   # Für Linux:
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Überprüfen der Installation
   node --version
   npm --version
   ```

2. **Projekt klonen:**
   ```bash
   git clone https://github.com/AsinasEsber/VFS.git
   ```

3. **Abhängigkeiten installieren:**
   ```bash
   npm install
   # oder
   yarn install
   ```

4. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

## 📁 Projektstruktur

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 🔧 Komponenten

### Gantt-Diagramm Module
- **index.tsx** - Zentrale Steuerungskomponente
- **BookingItem.tsx** - Visualisierung der Buchungen
- **TimelineGrid.tsx** - Zeitliches Rasterlayout
- **VehicleRow.tsx** - Fahrzeugzeilendarstellung
- **TimelineHeader.tsx** - Zeitachsenbeschriftung

### Filter- und Navigationskomponenten
- **BookingFilter.tsx** - Statusbasierte Filterung
- **VehicleFilter.tsx** - Fahrzeugtypfilterung
- **ModeSwitcher.tsx** - Zeitansichtswechsel

### Verfügbare Datentypen
```typescript
Fahrzeugkategorien:
- PKW (Passenger car)
- LKW (Truck)
- Transporter (Van)
- Bus (Bus)
- Sonderfahrzeug (Special vehicle)

Buchungsstatus:
- Bestätigt (Confirmed)
- In Bearbeitung (Pending)
- Abgeschlossen (Completed)
```

## 📝 Entwicklungshinweise

- TypeScript-basierte Komponenten
- Material-UI für einheitliches Design
- Modularer Aufbau für einfache Wartung
- Integrierte Testdaten für Entwicklung

## ⚖️ Lizenz

Proprietäre Software - Copyright (c) 2025 Asinas Esber

Diese Software ist urheberrechtlich geschützt. Jegliche Nutzung, Vervielfältigung oder Verteilung ohne ausdrückliche schriftliche Genehmigung ist untersagt. Zuwiderhandlungen werden rechtlich verfolgt.

