# 🧭 Projeto Atividade 4

O projeto Amigos da Onça é uma ONG fictícia que visa o apredizado e a construção de um website utilizando as tecnologias html5, css3 e js.

---

## 📂 Estrutura do Projeto

```
atividade4/
├── src/
│   ├── index.html
│   ├── cadastro.html
│   └── projetosocial.html
├── assets/
│   ├── css/
│   └── js/
├── README.md
├── .gitattributes
└── .gitignore
```

---

## 🚀 Estratégia de Branching — GitFlow

O fluxo de trabalho segue o modelo **GitFlow**, ideal para projetos com ciclos de versões claros.

### 🌳 Branches principais
- **`main`** → contém a versão estável em produção  
- **`develop`** → código em desenvolvimento ativo  

### 🌿 Branches auxiliares
- **`feature/*`** → novas funcionalidades  
- **`release/*`** → preparação para novas versões  
- **`hotfix/*`** → correções emergenciais em produção  

## 🧩 Commits Semânticos (Conventional Commits)

Os commits seguem o padrão **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** para manter a clareza e automatizar versões.

| Tipo | Descrição |
|------|------------|
| `feat:` | nova funcionalidade |
| `fix:` | correção de bug |
| `docs:` | alteração na documentação |
| `style:` | mudanças visuais ou de formatação |
| `refactor:` | refatoração sem alterar comportamento |
| `test:` | inclusão/ajuste de testes |
| `chore:` | manutenção e tarefas auxiliares |


## 🏷️ Versionamento Semântico (SemVer)

O projeto segue o padrão **SemVer**:  
`MAJOR.MINOR.PATCH`

| Tipo de alteração | Exemplo | Descrição |
|-------------------|----------|------------|
| **MAJOR** | 2.0.0 | Mudanças incompatíveis |
| **MINOR** | 1.1.0 | Novas funcionalidades compatíveis |
| **PATCH** | 1.0.1 | Correções de bugs |

### 💻 Exemplo de fluxo de release
```bash
# iniciar release
git flow release start v1.0.0

# revisar, testar e atualizar changelog
git flow release finish v1.0.0

# enviar para repositório remoto
git push origin main --tags
```

---

## 👨‍💻 Autor
**Marcelo Honda**  
Implementação e estruturação GitFlow + Versionamento Semântico 

Projeto fictício para fins de estudos

📅 *2025-10-30*

---

## 📄 Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo `LICENSE` (se aplicável) para mais detalhes.
