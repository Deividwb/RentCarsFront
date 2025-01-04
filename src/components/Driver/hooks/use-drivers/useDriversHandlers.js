import { useSelector } from "react-redux";
import {
  selectDriversMessages,
  updateDriversData,
  updateDriversMessages,
} from "../../store/drivers/drivers.store";
import useHandlers from "../../../../utils/useHandlers/useHandlers";

export const useDriversHandlers = () => {
  const messages = useSelector(selectDriversMessages);

  const events = useHandlers(
    updateDriversData,
    updateDriversMessages,
    messages
  );

  const callbacks = {};

  const selects = {};

  const extraHandlers = {
    handleGenereteReport: async (selectedItems) => {
      const reportUrl = "https://localhost:7184/api/report/generate-report";

      // Exemplo de dados que você pode enviar para o backend
      const requestData = selectedItems;

      try {
        // Enviando uma requisição POST com dados
        const response = await fetch(reportUrl, {
          method: "POST", // Método POST
          headers: {
            "Content-Type": "application/json", // Tipo de conteúdo que está sendo enviado
          },
          body: JSON.stringify(requestData), // Dados a serem enviados
        });

        // Verificar se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(
            `Erro na geração do relatório: ${response.statusText}`
          );
        }

        // Obtendo o conteúdo em formato blob (geralmente um PDF)
        const blob = await response.blob();

        // Criar um link temporário para o download
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "driver.pdf"; // Nome do arquivo

        // Adicionar o link ao DOM e clicar para iniciar o download
        document.body.appendChild(link);
        link.click();

        // Remover o link do DOM após o download
        document.body.removeChild(link);
      } catch (error) {
        console.error("Erro ao gerar o relatório:", error);
      }
    },
  };

  return {
    ...events,
    selects,
    callbacks,
    extraHandlers,
  };
};
