import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Logo } from "@/app/components/Logo";
import { HighLight } from "@/app/components/HighLight";
import { Button } from "@/app/components/Button";
import { useEffect, useState } from "react";
import { acceptTerms } from "@/storage/authStorage";
import { useNavigation } from "@react-navigation/native";

export function Term() {
  const [accepted, setAccepted] = useState(false);
  const navigation = useNavigation();

  async function handleAccept(){
    await acceptTerms();
    setAccepted(true);
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Logo />
      <HighLight title="Bem vindo" subtitle="Leia atentamente" />
      <View style={styles.contentTerm}>
        <ScrollView contentContainerStyle={{ padding: 12 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 8,
              alignSelf: "center",
            }}
          >
            Termos de Uso – KeyNest
          </Text>

          <Text style={{ marginBottom: 6 }}>
            Última atualização: 27/08/2025
          </Text>

          <Text style={{ marginBottom: 12 }}>
            Bem-vindo ao KeyNest, um aplicativo desenvolvido por{" "}
            <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Raul Lopes Braga
            </Text>
            . Ao utilizar o aplicativo, você concorda com os presentes Termos de
            Uso. Leia-os com atenção antes de utilizar o KeyNest.
          </Text>

          <Text style={{ fontWeight: "bold" }}>1. Sobre o KeyNest</Text>
          <Text style={{ marginBottom: 12 }}>
            O KeyNest é um aplicativo de gerenciamento de senhas que armazena os
            dados exclusivamente no dispositivo do usuário. Não há envio,
            sincronização ou armazenamento em servidores externos.
          </Text>

          <Text style={{ fontWeight: "bold" }}>2. Aceitação dos Termos</Text>
          <Text style={{ marginBottom: 12 }}>
            Ao instalar ou utilizar o KeyNest, o usuário declara estar de acordo
            com este Termo de Uso. Caso não concorde, deve desinstalar o
            aplicativo imediatamente.
          </Text>

          <Text style={{ fontWeight: "bold" }}>3. Uso do Aplicativo</Text>
          <Text style={{ marginBottom: 12 }}>
            O usuário é o único responsável por cadastrar, manter e gerenciar
            suas senhas no aplicativo. O Desenvolvedor não tem acesso às
            informações inseridas no KeyNest. O uso do aplicativo é de
            responsabilidade exclusiva do usuário.
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            4. Responsabilidade e Limitações
          </Text>
          <Text style={{ marginBottom: 12 }}>
            O KeyNest não garante proteção absoluta contra perda de dados
            causada por falhas do dispositivo, desinstalação ou mau uso. O
            Desenvolvedor não se responsabiliza por danos diretos ou indiretos
            decorrentes do uso do aplicativo, incluindo perda de senhas ou
            acessos não autorizados. É responsabilidade do usuário manter
            medidas adicionais de segurança, como senhas fortes e bloqueio do
            dispositivo.
          </Text>
          <Text style={{ fontWeight: "bold" }}>5. Propriedade Intelectual</Text>
          <Text style={{ marginBottom: 12 }}>
            O KeyNest é de propriedade de Raul Lopes Braga. O uso do aplicativo
            não concede ao usuário qualquer direito sobre a marca, logotipo ou
            código do software.
          </Text>
          <Text style={{ fontWeight: "bold" }}>6. Privacidade</Text>
          <Text style={{ marginBottom: 12 }}>
            O aplicativo não coleta nem compartilha dados pessoais ou senhas.
            Todas as informações ficam armazenadas localmente no dispositivo do
            usuário.
          </Text>
          <Text style={{ fontWeight: "bold" }}>7. Alterações nos Termos</Text>
          <Text style={{ marginBottom: 12 }}>
            O Desenvolvedor pode atualizar estes Termos de Uso periodicamente.
            Alterações relevantes serão comunicadas dentro do próprio aplicativo
            ou por outros meios apropriados.
          </Text>
          <Text style={{ fontWeight: "bold" }}>8. Contato</Text>
          <Text style={{ marginBottom: 12 }}>
            Em caso de dúvidas, sugestões ou solicitações relacionadas ao
            KeyNest, entre em contato pelo e-mail:{" "}
            <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
              raullopes@terra.com.br
            </Text>
          </Text>
        </ScrollView>
      </View>
      <Button title="Aceito os Termos de Uso" onPress={handleAccept} />
    </View>
  );
}
