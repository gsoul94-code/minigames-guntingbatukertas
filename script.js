class Start{

    constructor(){
        this.namaPlayer = "Player"
        this.namaBot = "Bot"
        this.opsiPlayer;
        this.opsiBot;
        this.pemenang = ""
    }
    
    get getOpsiPlayer(){
        return this.opsiPlayer;
    }

    set setOpsiPlayer(opsi){
        this.opsiPlayer = opsi;
    }

    get getOpsiBot(){
        return this.opsiBot;
    }

    set setOpsiBot(opsi){
        this.opsiBot = opsi;
    }

    botBrain(){
        const opsi = ["✌️", "✊", "🖐"];
        const generate = opsi[Math.floor(Math.random() * opsi.length)];
        return generate;
    }

    kalkulasiPemenang(){
        if(this.opsiBot == "🖐" && this.opsiPlayer == "✌️"){
            return this.pemenang = this.namaPlayer;
        }else if(this.opsiBot == "🖐" && this.opsiPlayer == "✊"){
            return this.pemenang = this.namaBot;
        }else if(this.opsiBot == "✊" && this.opsiPlayer == "✌️"){
            return this.pemenang = this.namaBot;
        }else if(this.opsiBot == "✊" && this.opsiPlayer == "🖐"){
            return this.pemenang = this.namaPlayer;
        }else if(this.opsiBot == "✌️" && this.opsiPlayer == "✊"){
            return this.pemenang = this.namaPlayer;
        }else if(this.opsiBot == "✌️" && this.opsiPlayer == "🖐"){
            return this.pemenang = this.namaBot;
        }else{
            return this.pemenang = "Seri";
        }
    }

    hasilPertandingan(){
        if(this.pemenang == "Player"){
            return `${this.pemenang} Menang! 😆`;
        }else if(this.pemenang == "Bot"){
                return `${this.pemenang} Menang! 🤖`;
        }else{
            return `YAH! ${this.pemenang}, tanding lagi! 🔥`;
        }
    }

}

function pilihOpsi(params){
    document.getElementById("title1").style.display = "none";
    document.getElementById("title2").style.display = "block";
    document.getElementById("versus").style.display = "block";
    document.getElementById("hasilPertandingan").style.display = "block";

    const start = new Start();
    start.setOpsiPlayer = params;
    start.setOpsiBot = start.botBrain();
    start.kalkulasiPemenang();
    const versus = document.getElementById("versus");
    const hasilPertandingan = document.getElementById("hasilPertandingan");

    versus.textContent = "...";
    hasilPertandingan.textContent = "...";

    setTimeout(() => {
        versus.textContent = `${start.getOpsiPlayer} VS ${start.getOpsiBot}`;
        hasilPertandingan.textContent = start.hasilPertandingan();
    }, 1000)
}