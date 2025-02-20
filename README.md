# Easyjur List Rapporteurs 
**API para listagem de relatores a partir de uma base de dados ElasticSearch**  

---

## **Objetivo**  
Desenvolver um endpoint que recupere e retorne todos os relatores únicos disponíveis em um índice específico do ElasticSearch, utilizando agregações para otimizar a consulta.

---

## **Funcionalidades**  
- Consulta agregada no ElasticSearch para listagem eficiente  
- Retorno de relatores únicos (sem duplicações)  
- Configuração simplificada via variáveis de ambiente  
- Resposta em formato JSON pronta para integração  

---

## **Instalação**  
1. Clone o repositório:  
```bash  
git clone https://github.com/seu-usuario/nome-do-repositorio.git  
cd nome-do-repositorio  
```  

2. Instale as dependências:  
```bash  
npm install  
```  

3. Configure o arquivo `.env` (baseado no `.env.example`):  
```env  
URL="sua_url_elasticsearch"  
TOKEN="seu_token_api"  
INDEX="nome_do_indice"  
PORT=3000  
```  

4. Inicie o servidor:  
```bash  
npm start  
```  

---

## **Como Usar**  
Faça uma requisição GET para o endpoint:  
```  
http://localhost:3000/map  
```  

### Exemplo de Resposta:  
```json  
{  
  "relatores": [  
    "Relator A",  
    "Relator B",  
    "Relator C"  
  ]  
}  
``` 

---

## **Tecnologias Utilizadas**  
- **Elasticsearch Client**: Cliente oficial para integração com ElasticSearch  
- **Express.js**: Framework para construção da API  
- **dotenv**: Gerenciamento de variáveis de ambiente  
- **Node.js**: Ambiente de execução do servidor  

---

## **Disclaimer**
🔐 **Atenção**:
- Este projeto é destinado exclusivamente para fins demonstrativos.
- Requer configuração prévia de um cluster ElasticSearch válido
- As credenciais de acesso devem ser protegidas (não commitar no repositório)
- A lista de relatores depende da estrutura e qualidade dos dados no índice configurado
- Adapte o mapeamento do índice conforme necessário para seu caso de uso específico
