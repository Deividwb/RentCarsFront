import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Dados das despesas
const despesas = [
  {
    despesa: "Almoço",
    estabelecimento: "Restaurante Prato Bom",
    data: "22/07/2023",
    valor: 180.0,
  },
  {
    despesa: "Combustível",
    estabelecimento: "-",
    data: "22/07/2023",
    valor: 155.0,
  },
  {
    despesa: "Estacionamento",
    estabelecimento: "-",
    data: "22/07/2023",
    valor: 10.0,
  },
  {
    despesa: "Café",
    estabelecimento: "Cafeteria ShoeCafé",
    data: "22/07/2023",
    valor: 10.0,
  },
];

// Função para criar o PDF
function RelatorioPDF() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 30,
    },
    header: {
      textAlign: "center",
      marginBottom: 20,
    },
    establishment: {
      fontSize: 14,
      fontWeight: "bold",
    },
    month: {
      fontSize: 12,
    },
    table: {
      display: "table",
      width: "100%",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableCell: {
      margin: 5,
      fontSize: 12,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.establishment}>Nome do Estabelecimento</Text>
          <Text style={styles.month}>Mês: Julho de 2023</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Despesa</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Estabelecimento</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Data</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Valor (R$)</Text>
            </View>
          </View>
          {despesas.map((despesa, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCell}>
                <Text>{despesa.despesa}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{despesa.estabelecimento}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{despesa.data}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{despesa.valor}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default RelatorioPDF;
