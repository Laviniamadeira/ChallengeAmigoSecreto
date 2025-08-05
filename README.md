# 🎁 Challenge Amigo Secreto

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</div>


## 📖 Sobre o Projeto

Uma aplicação web interativa para organizar sorteios de **Amigo Secreto** de forma simples e divertida! Desenvolvida com tecnologias front-end fundamentais, permite adicionar participantes, visualizar a lista em tempo real e realizar sorteios aleatórios com apenas um clique.

Perfect para festas, confraternizações, eventos familiares ou qualquer ocasião que precise de um sorteio justo e transparente! 🎉

## ✨ Funcionalidades

### 🎯 **Principais Recursos**
- ➕ **Adicionar Participantes** - Interface intuitiva para inserir nomes
- 👥 **Lista Dinâmica** - Visualização em tempo real dos participantes
- 🎲 **Sorteio Aleatório** - Algoritmo justo para escolher o vencedor
- 🚫 **Prevenção de Duplicatas** - Sistema que evita nomes repetidos
- 📱 **Interface Responsiva** - Funciona em desktop, tablet e mobile
- 🎨 **Design Moderno** - Interface limpa e amigável

### 🛠️ **Recursos Técnicos**
- ✅ Manipulação do DOM em tempo real
- ✅ Validação de entrada de dados
- ✅ Algoritmo de randomização
- ✅ Gerenciamento de estado da aplicação
- ✅ Design responsivo com CSS3

## 🚀 Como Usar

### **💻 Execução Local**
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Laviniamadeira/ChallengeAmigoSecreto.git
   ```

2. **Navegue até o diretório:**
   ```bash
   cd ChallengeAmigoSecreto
   ```

3. **Abra no navegador:**
   - Duplo clique no arquivo `index.html`, ou
   - Abra com seu navegador preferido

### **🎮 Instruções de Uso**

1. **📝 Adicionar Participantes:**
   - Digite o nome no campo de entrada
   - Clique em "Adicionar Amigo"
   - O nome aparecerá automaticamente na lista

2. **👀 Visualizar Lista:**
   - Todos os nomes adicionados são exibidos dinamicamente
   - A lista é atualizada em tempo real

3. **🎲 Realizar Sorteio:**
   - Clique no botão "Sortear Amigo"
   - O nome sorteado será exibido no resultado
   - Pode sortear quantas vezes quiser!

## 🎯 Demonstração

### **Fluxo de Uso:**
```
1. Digite "Ana" → Clique "Adicionar" → Ana aparece na lista
2. Digite "João" → Clique "Adicionar" → João aparece na lista  
3. Digite "Maria" → Clique "Adicionar" → Maria aparece na lista
4. Clique "Sortear Amigo" → Resultado: "João foi sorteado!"
```

## 🧠 Conceitos Aplicados

### **Frontend Development**
- 🏗️ **HTML Semântico** - Estrutura bem organizada
- 🎨 **CSS Responsivo** - Layout adaptável
- ⚡ **JavaScript Vanilla** - Lógica pura sem frameworks

### **Programação**
- 📋 **Arrays e Manipulação** - Gerenciamento da lista
- 🎲 **Math.random()** - Algoritmo de sorteio
- 🔄 **Event Listeners** - Interação com usuário
- ✅ **Validação de Dados** - Prevenção de erros

### **UX/UI**
- 🎯 **Interface Intuitiva** - Fácil de usar
- 📱 **Mobile First** - Pensado para dispositivos móveis
- ♿ **Acessibilidade** - Navegação por teclado

## 🛠️ Estrutura do Código

### **📁 Arquivos Principais**
```
ChallengeAmigoSecreto/
├── index.html          # Estrutura da página
├── style.css           # Estilização
├── script.js           # Lógica da aplicação
└── README.md           # Documentação
```

### **⚙️ Lógica Principal**
```javascript
// Exemplo da função de sorteio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = 
        `🎉 ${amigoSorteado} foi sorteado!`;
}
```


## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido para praticar:

- 🌐 **Desenvolvimento Web Frontend** básico
- 🎛️ **Manipulação do DOM** com JavaScript
- 📱 **Design Responsivo** com CSS
- 🎲 **Algoritmos de Randomização**
- ✅ **Validação e Tratamento** de dados
- 🎨 **UX/UI Design** fundamentals

## 🎪 Casos de Uso

### **🎄 Eventos Familiares**
- Natal, aniversários, reuniões de família
- Amigo secreto entre parentes

### **🏢 Ambiente Corporativo**  
- Confraternizações de fim de ano
- Team building e integração

### **🎓 Escolar/Acadêmico**
- Atividades em sala de aula
- Grupos de estudo e projetos

### **👫 Social**
- Grupos de amigos
- Eventos casuais e festas

## 🤝 Contribuições

Contribuições são muito bem-vindas! Para contribuir:

1. 🍴 **Fork** o projeto
2. 🌿 **Crie uma branch** (`git checkout -b feature/nova-funcionalidade`)
3. 💻 **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. 📤 **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. 🔄 **Abra um Pull Request**

