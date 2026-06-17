import { test, expect } from '@playwright/test';

const MEU_RM   = '212048'
const BASE_URL = 'https://prova.carvalho.cc';

test('submissão completa da prova', async ({ browser }) => {
  const context = await browser.newContext({
    extraHTTPHeaders: { 'x-exam-student-id': MEU_RM },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL);

  // Dry-run banner should NOT appear
  await expect(page.locator('#dry-run-banner')).not.toBeVisible();

  // escreva o teste a partir daqui (clicar = .click)

  //Preenchimento dos campos de identificação
  await page.getByLabel('Número de Matrícula').fill('212048');
  await page.getByLabel('Nome Completo').fill('Miguel da Silva Santana');
  await page.getByLabel('URL do Repositório').fill('https://github.com/MdgSant/Prova-DS');

  //Iniciando a prova
  await page.getByRole('button', {name: 'Iniciar Prova'}).click();

  //Questão 1
  await page.getByRole('radio', { name: 'Os testes devem ser simples e legíveis — evite complexidade desnecessária'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 2
  await page.getByRole('radio', { name: 'Incluir na lista de dependências um valor que é reatribuído dentro do próprio efeito'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 3
  await page.getByRole('radio', { name: 'Um conjunto de casos de teste agrupados em torno de uma funcionalidade ou preocupação'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 4
  await page.getByRole('radio', { name: "Don't Repeat Yourself — evite duplicar conhecimento ou lógica"}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 5
  await page.getByRole('radio', { name: 'Testa um único trecho de lógica de forma isolada, sem dependências externas'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 6
  await page.getByRole('radio', { name: 'Porque cobrem mais casos extremos'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 7
  await page.getByRole('radio', { name: 'Testes unitários'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 8
  await page.getByRole('radio', { name: 'Executar um efeito colateral (ex: buscar dados, configurar uma inscrição) após a renderização'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 9
  await page.getByRole('radio', { name: 'Para manter o teste rápido e determinístico, sem depender de um serviço externo'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 10
  await page.getByRole('radio', { name: 'Teste de integração'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 11
  await page.getByRole('radio', { name: 'Quantas vezes a função foi chamada e com quais argumento'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 12
  await page.getByRole('radio', { name: 'Uma versão memoizada do estado que só atualiza quando as dependências mudam'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 13
  await page.getByRole('radio', { name: 'Uma função que valida os dados de entrada, salva no banco de dados e envia um e-mail'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 14
  await page.getByRole('radio', { name: 'Os serviços podem ser implantados, escalados e desenvolvidos de forma independente'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 15
  await page.getByRole('radio', { name: 'Executa uma função de configuração antes de cada caso de teste individualmente'}).click();
  await page.getByRole('button', {name: 'Próxima'}).click();

  //Questão 16
  await page.getByRole('radio', { name: 'A porcentagem do código de produção executada pela suite de teste'}).click();


  // Confirmar envio
  // Remover o comentário quando terminar de escrever o código
  // await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});