let story = document.getElementById('story');
let choices = document.getElementById('choices');

function choose(path) {
    if (path === 'desert') {
        story.innerHTML = 'Você foi ao deserto e encontrou uma pista. Deseja segui-la ou procurar mais informações?';
        choices.innerHTML = `
            <button onclick="choose('follow_clue')">Seguir a pista</button>
            <button onclick="choose('seek_info')">Procurar mais informações</button>
        `;
    } else if (path === 'forest') {
        story.innerHTML = 'Você entrou na floresta e encontrou um mapa antigo. Deseja seguir o mapa ou explorar a área?';
        choices.innerHTML = `
            <button onclick="choose('follow_map')">Seguir o mapa</button>
            <button onclick="choose('explore')">Explorar a área</button>
        `;
    } else if (path === 'follow_clue') {
        story.innerHTML = 'Você encontrou uma caverna. Deseja entrar ou descansar?';
        choices.innerHTML = `
            <button onclick="choose('enter_cave')">Entrar na caverna</button>
            <button onclick="choose('rest')">Descansar</button>
        `;
    } else if (path === 'seek_info') {
        story.innerHTML = 'Você descobriu que a pista leva a um vilarejo distante. Aventura encerrada.';
        choices.innerHTML = `<button onclick="reset()">Recomeçar</button>`;
    } else if (path === 'follow_map') {
        story.innerHTML = 'Você encontrou uma tribo desconhecida. Deseja pedir ajuda ou fugir?';
        choices.innerHTML = `
            <button onclick="choose('ask_help')">Pedir ajuda</button>
            <button onclick="choose('run_away')">Fugir</button>
        `;
    } else if (path === 'explore') {
        story.innerHTML = 'Você encontrou uma passagem secreta. Deseja seguir ou voltar?';
        choices.innerHTML = `
            <button onclick="choose('follow_passage')">Seguir</button>
            <button onclick="choose('go_back')">Voltar</button>
        `;
    } else if (path === 'enter_cave') {
        story.innerHTML = 'Você encontrou o tesouro escondido! Aventura concluída.';
        choices.innerHTML = `<button onclick="reset()">Recomeçar</button>`;
    } else if (path === 'rest') {
        story.innerHTML = 'Você descansou, mas perdeu tempo e a pista esfriou. Aventura encerrada.';
        choices.innerHTML = `<button onclick="reset()">Recomeçar</button>`;
    } else if (path === 'ask_help') {
        story.innerHTML = 'A tribo ajudou você a encontrar o tesouro! Aventura concluída.';
        choices.innerHTML = `<button onclick="reset()">Recomeçar</button>`;
    } else if (path === 'run_away') {
        story.innerHTML = 'Você fugiu e se perdeu na floresta. Aventura encerrada.';
        choices.innerHTML = `<button onclick="reset()">Recomeçar</button>`;
    } else if (path === 'follow_passage') {
        story.innerHTML = 'Você seguiu a passagem e encontrou o tesouro escondido! Aventura concluída.';
        choices.innerHTML = `<button onclick="reset()">Recomeçar</button>`;
    } else if (path === 'go_back') {
        story.innerHTML = 'Você voltou e perdeu a chance de encontrar o tesouro. Aventura encerrada.';
        choices.innerHTML = `<button onclick="reset()">Recomeçar</button>`;
    }
}

function reset() {
    story.innerHTML = 'Você é um explorador se preparando para uma aventura. Para onde você quer ir?';
    choices.innerHTML = `
        <button onclick="choose('desert')">Ir para o Deserto</button>
        <button onclick="choose('forest')">Ir para a Floresta</button>
    `;
}
