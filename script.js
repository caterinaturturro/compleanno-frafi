document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTI PRINCIPALI
    ===================================================== */

    const home =
        document.getElementById("home");

    const startButton =
        document.getElementById("startButton");

    const album =
        document.getElementById("album");

    const polaroid =
        document.querySelector(".polaroid");

    const image =
        document.getElementById("polaroidImage");

    const caption =
        document.getElementById("photoCaption");

    const nextButton =
        document.getElementById("nextPhoto");

    const counter =
        document.getElementById("currentPhoto");


    /* =====================================================
       LETTERA
    ===================================================== */

    const letterSection =
        document.getElementById("letter-section");

    const letterEnvelope =
        document.getElementById("letterEnvelope");

    const letterPage =
        document.getElementById("letter-page");

    const typedLetter =
        document.getElementById("typed-letter");

    const skipTyping =
        document.getElementById("skipTyping");

    const signature =
        document.querySelector(".letter-signature");

    const letterTransition =
        document.getElementById("letter-transition");


    /* =====================================================
       TELEFONO
    ===================================================== */

    const phoneSection =
        document.getElementById("phone-section");

    const flipPhone =
        document.getElementById("flipPhone");


    /* =====================================================
       GIRADISCHI
    ===================================================== */

const recordSection =
    document.getElementById("record-section");

const recordSource =
    document.getElementById("recordSource");

const turntablePlatter =
    document.getElementById("turntablePlatter");

const recordOnPlayer =
    document.getElementById("recordOnPlayer");

const recordMessage =
    document.getElementById("recordMessage");

const musicControls =
    document.getElementById("musicControls");

const playPauseMusic =
    document.getElementById("playPauseMusic");

const spotifyPlayerWrapper =
    document.getElementById("spotifyPlayerWrapper");

const spotifyEmbed =
    document.getElementById("spotifyEmbed");

const spotifyOpenLink =
    document.getElementById("spotifyOpenLink");

const goToFinal =
    document.getElementById("goToFinal");

    /* =====================================================
       CONTROLLO ELEMENTI PRINCIPALI
    ===================================================== */

    if (
        !home ||
        !startButton ||
        !album ||
        !polaroid ||
        !image ||
        !caption ||
        !nextButton ||
        !counter ||
        !letterSection ||
        !letterEnvelope ||
        !letterPage ||
        !typedLetter ||
        !skipTyping ||
        !signature ||
        !letterTransition ||
        !phoneSection ||
        !flipPhone
    ) {

        console.error(
            "Errore: mancano uno o più elementi principali dell'HTML."
        );

        return;
    }


    /* =====================================================
       FOTO
    ===================================================== */

    const photos = [

        {
            file: "foto1.jpg",
            caption: "la nostra prima fotina insieme"
        },

        {
            file: "foto2.jpg",
            caption: "primo bacio catturato in foto"
        },

        {
            file: "foto3.jpg",
            caption: "prime volte a casa tua"
        },

        {
            file: "foto4.jpg",
            caption: "alla mezzanotte del tuo compleanno"
        },

        {
            file: "foto5.jpg",
            caption: "our sexiest photoo"
        },

        {
            file: "foto6.jpg",
            caption: "io che mi prendo cura di te"
        },

        {
            file: "foto7.jpg",
            caption: "scemini togetherr"
        },

        {
            file: "foto8.jpg",
            caption: "quando ti sei tatuato il nostro simbolo 💗"
        },

        {
            file: "foto9.jpg",
            caption: "prima e ultima volta da soso"
        },

        {
            file: "foto10.jpg",
            caption: "quanto sei piccinoo"
        },

        {
            file: "foto11.jpg",
            caption: "io che ti mordo ihih"
        },

        {
            file: "foto12.jpg",
            caption: "bacio al chiaro di luna 💗"
        },

        {
            file: "foto13.jpg",
            caption: "1 anno insieme 💗"
        },

        {
            file: "foto14.jpg",
            caption: "io che ti mordo pt.2 (so che ti piace)"
        },

        {
            file: "foto15.jpg",
            caption: "ti amo tanto paperotto 💗"
        }

    ];


    let currentIndex = 0;


    /* =====================================================
       MOSTRA FOTO
    ===================================================== */

    function showPhoto(index) {

        if (
            index < 0 ||
            index >= photos.length
        ) {
            return;
        }


        const photo =
            photos[index];


        polaroid.classList.remove(
            "photo-changing"
        );


        void polaroid.offsetWidth;


        image.src =
            "foto/" + photo.file;


        image.alt =
            photo.caption;


        caption.textContent =
            photo.caption;


        counter.textContent =
            index + 1;


        polaroid.classList.add(
            "photo-changing"
        );

    }


    /* =====================================================
       HOME → ALBUM
    ===================================================== */

    startButton.addEventListener(
        "click",
        () => {

            home.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";


            home.style.opacity =
                "0";


            home.style.transform =
                "scale(0.97)";


            setTimeout(() => {

                home.style.display =
                    "none";


                album.style.display =
                    "flex";


                album.style.opacity =
                    "0";


                requestAnimationFrame(() => {

                    album.style.opacity =
                        "1";

                });


                currentIndex =
                    0;


                showPhoto(
                    currentIndex
                );

            }, 800);

        }
    );


    /* =====================================================
       ALBUM → FOTO SUCCESSIVA
    ===================================================== */

    nextButton.addEventListener(
        "click",
        () => {

            currentIndex++;


            if (
                currentIndex >=
                photos.length
            ) {

                album.style.transition =
                    "opacity 0.6s ease";


                album.style.opacity =
                    "0";


                setTimeout(() => {

                    album.style.display =
                        "none";


                    album.style.opacity =
                        "1";


                    currentIndex =
                        0;


                    letterSection.classList.add(
                        "show-letter"
                    );

                }, 600);


                return;
            }


            showPhoto(
                currentIndex
            );

        }
    );


    /* =====================================================
       TESTO LETTERA
    ===================================================== */

    const paragraphs = [

        "Amore,\n\nnon so bene come iniziare questa lettera. Aprirmi e parlarti sinceramente dei miei sentimenti è sempre un po’ complicato per me, ma ci proverò.",

        "Vorrei prima di tutto dirti buon compleanno. Anche se so che non dovrebbe essere un solo giorno a doverti far sentire speciale, spero che oggi tu possa godertelo davvero e sentirti amato dalle persone che hai vicino. Anche quando credi che non ci sia nessuno, ricordati che ci sono persone intorno a te che ti amano per quello che sei.",

        "Non voglio scrivere una lettera scontata, fatta di parole banali e ripetute mille volte. Penso che tu sappia già che ti amo e che sei una delle persone più importanti della mia vita. Voglio invece scriverti perché nell’ultimo periodo ho finalmente capito una cosa. Sono riuscita a darmi una risposta a quella domanda che mi facesti tanto tempo fa e che, per tutto questo tempo, è rimasta in sospeso: “Cos’è per te l’amore?”.",

        "Penso di essere finalmente riuscita a trovare la mia risposta.",

        "Stando con te ho capito che l’amore non significa sentire ogni giorno quella forte passione che si vede nei film. Non significa volersi bene incondizionatamente in ogni momento, né significa non litigare, non avere dubbi o non avere mai pensieri contrastanti.",

        "Per me, amore significa scegliersi ogni giorno.",

        "Significa sapere che, nonostante le difficoltà e i pensieri negativi, si può continuare a contare sull’altro. Significa sapere che al mattino troverò sempre il tuo messaggio del buongiorno e alla sera quello della buonanotte. Significa presenza.",

        "E io, con te, ho capito davvero cosa significa poter contare su qualcuno.",

        "Anche quando litighiamo, quando non ci capiamo o quando ci sono momenti in cui sembra tutto più difficile, so che, una volta sbollita la rabbia e tornati a mente lucida, possiamo parlarci, chiarirci e ritrovare il nostro equilibrio. E forse è proprio questo che rende il nostro legame così importante per me: sapere che, anche nei momenti più difficili, possiamo tornare a sceglierci e rafforzare quel filo invisibile che ci lega.",

        "Non so se questa sia una risposta esaustiva alla tua domanda e non so nemmeno se sono riuscita a spiegarmi nel modo giusto. Non sono brava a dire quello che provo e probabilmente non lo sarò mai del tutto. Però, dentro di me, sento di avere una consapevolezza sempre maggiore del sentimento che provo per te.",

        "Spero che tu possa apprezzare questi regalini che ti darò oggi. Li ho pensati con tanto amore e spero che siano venuti come me li ero immaginati. È sempre abbastanza complicato stupirti con i regali, perché so che hai tutto e che, se vuoi qualcosa, puoi semplicemente prendertela da solo. Ma ogni tanto mi piace poterti sorprendere e, soprattutto, farti sentire speciale, proprio come tu fai sentire me.",

        "Spero che questo possa essere soltanto uno dei tantissimi compleanni che passeremo insieme.",

        "Non vedo l’ora di vederci crescere, di guardarci un giorno indietro e poter essere fieri di quello che saremo diventati. Di poter guardare i nostri “noi” più piccoli con tenerezza e pensare a quanto abbiamo creduto in questo amore, anche quando non era tutto semplice.",

        "E forse è proprio questo che desidero di più: continuare a crescere insieme, imparare l’uno dall’altra, attraversare quello che la vita ci metterà davanti e, ogni volta, ritrovarci dalla stessa parte.",

        "Buon compleanno, amore mio.",

        "Ti amo e ti amerò, per sempre. ❤️"

    ];


    const letterText =
        paragraphs.join("\n\n");


    /* =====================================================
       STATO LETTERA
    ===================================================== */

    let character =
        0;

    let typingTimer =
        null;

    let typingFinished =
        false;

    let userSkippedTyping =
        false;

    let phoneTransitionStarted =
        false;


    /* =====================================================
       PULSANTE CONTINUA
    ===================================================== */

    let continueButton =
        document.getElementById(
            "continueLetter"
        );


    if (!continueButton) {

        continueButton =
            document.createElement(
                "button"
            );


        continueButton.id =
            "continueLetter";


        continueButton.type =
            "button";


        continueButton.textContent =
            "Continua →";


        letterPage.appendChild(
            continueButton
        );

    }


    continueButton.style.display =
        "none";


    /* =====================================================
       RESET LETTERA
    ===================================================== */

    function resetLetter() {

        if (typingTimer) {

            clearTimeout(
                typingTimer
            );

            typingTimer =
                null;
        }


        character =
            0;


        typingFinished =
            false;


        userSkippedTyping =
            false;


        phoneTransitionStarted =
            false;


        typedLetter.textContent =
            "";


        signature.style.opacity =
            "0";


        continueButton.style.display =
            "none";

    }


    /* =====================================================
       FINE SCRITTURA
    ===================================================== */

    function automaticLetterFinished() {

        if (typingFinished) {
            return;
        }


        typingFinished =
            true;


        setTimeout(() => {

            if (!userSkippedTyping) {

                signature.style.opacity =
                    "1";


                typingTimer =
                    setTimeout(() => {

                        goToPhone();

                    }, 3000);

            }

        }, 500);

    }


    /* =====================================================
       MACCHINA DA SCRIVERE
    ===================================================== */

    function writeLetter() {

        if (typingFinished) {
            return;
        }


        if (
            character <
            letterText.length
        ) {

            typedLetter.textContent +=
                letterText.charAt(
                    character
                );


            character++;


            typingTimer =
                setTimeout(
                    writeLetter,
                    15
                );


            return;
        }


        automaticLetterFinished();

    }


    /* =====================================================
       BUSTA → LETTERA
    ===================================================== */

    letterEnvelope.addEventListener(
        "click",
        () => {

            if (
                letterEnvelope.classList.contains(
                    "letter-open"
                )
            ) {

                return;
            }


            resetLetter();


            letterEnvelope.classList.add(
                "letter-open"
            );


            setTimeout(() => {

                letterPage.style.display =
                    "flex";


                requestAnimationFrame(() => {

                    letterPage.style.opacity =
                        "1";


                    const papyrus =
                        document.querySelector(
                            ".papyrus"
                        );


                    if (papyrus) {

                        papyrus.style.transform =
                            "scale(1)";

                    }

                });


                setTimeout(() => {

                    writeLetter();

                }, 500);

            }, 1400);

        }
    );


    /* =====================================================
       SALTA SCRITTURA
    ===================================================== */

    skipTyping.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            event.stopPropagation();


            if (userSkippedTyping) {
                return;
            }


            if (typingTimer) {

                clearTimeout(
                    typingTimer
                );

                typingTimer =
                    null;
            }


            userSkippedTyping =
                true;


            typingFinished =
                true;


            character =
                letterText.length;


            typedLetter.textContent =
                letterText;


            signature.style.opacity =
                "1";


            continueButton.style.display =
                "block";

        }
    );


    /* =====================================================
       CONTINUA → TELEFONO
    ===================================================== */

    continueButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            event.stopPropagation();


            if (!userSkippedTyping) {
                return;
            }


            goToPhone();

        }
    );


    /* =====================================================
       LETTERA → TELEFONO
    ===================================================== */

    function goToPhone() {

        if (phoneTransitionStarted) {
            return;
        }


        phoneTransitionStarted =
            true;


        if (typingTimer) {

            clearTimeout(
                typingTimer
            );

            typingTimer =
                null;
        }


        continueButton.style.display =
            "none";


        letterTransition.style.display =
            "flex";


        requestAnimationFrame(() => {

            letterTransition.classList.add(
                "active"
            );

        });


        setTimeout(() => {

            letterTransition.classList.add(
                "closing"
            );

        }, 250);


        setTimeout(() => {

            letterSection.classList.remove(
                "show-letter"
            );


            letterPage.style.display =
                "none";


            letterPage.style.opacity =
                "0";


            letterTransition.classList.remove(
                "active"
            );


            letterTransition.classList.remove(
                "closing"
            );


            letterTransition.style.display =
                "none";


            flipPhone.classList.remove(
                "phone-open"
            );


            phoneSection.classList.add(
                "phone-visible"
            );


            phoneSection.style.display =
                "";


            phoneSection.style.opacity =
                "0";


            phoneSection.style.transform =
                "scale(1)";


            requestAnimationFrame(() => {

                phoneSection.style.transition =
                    "opacity 0.8s ease";


                phoneSection.style.opacity =
                    "1";

            });

        }, 1650);

    }


    /* =====================================================
       TELEFONO CHIUSO → APERTO
    ===================================================== */

    flipPhone.addEventListener(
        "click",
        () => {

            if (
                flipPhone.classList.contains(
                    "phone-open"
                )
            ) {

                return;
            }


            flipPhone.classList.add(
                "phone-open"
            );

        }
    );


    /* =====================================================
       CODICE TELEFONO
    ===================================================== */

    const correctCode =
        "17082004";


    let enteredCode =
        "";


    /* =====================================================
       DISPLAY TELEFONO
    ===================================================== */

    const phoneDisplay =
        document.querySelector(
            ".phone-display"
        );


    const phoneDisplaySpan =
        phoneDisplay
            ? phoneDisplay.querySelector(
                "span"
            )
            : null;


    const phoneDisplayText =
        phoneDisplay
            ? phoneDisplay.querySelector(
                "p"
            )
            : null;


    /* =====================================================
       CONTROLLO CODICE
    ===================================================== */

    function checkPhoneCode() {

        if (
            enteredCode ===
            correctCode
        ) {

            if (phoneDisplaySpan) {

                phoneDisplaySpan.textContent =
                    "♥";

            }


            if (phoneDisplayText) {

                phoneDisplayText.textContent =
                    "ACCESSO CONSENTITO ❤️";

            }


            if (phoneDisplay) {

                phoneDisplay.style.transition =
                    "transform 0.3s ease";


                phoneDisplay.style.transform =
                    "scale(1.04)";


                setTimeout(() => {

                    phoneDisplay.style.transform =
                        "scale(1)";

                }, 300);

            }


            setTimeout(() => {

                phoneSection.style.transition =
                    "opacity 0.7s ease";


                phoneSection.style.opacity =
                    "0";


                flipPhone.classList.remove(
                    "phone-open"
                );


                setTimeout(() => {

                    phoneSection.classList.remove(
                        "phone-visible"
                    );


                    phoneSection.style.display =
                        "none";


                    showRecordSection();

                }, 700);

            }, 1500);


            return;
        }


        /* =================================================
           CODICE ERRATO
        ================================================= */

        if (phoneDisplaySpan) {

            phoneDisplaySpan.textContent =
                "×";

        }


        if (phoneDisplayText) {

            phoneDisplayText.textContent =
                "Codice errato...";

        }


        setTimeout(() => {

            if (phoneDisplayText) {

                phoneDisplayText.textContent =
                    "Indizio: è un giorno speciale... 🎂";

            }

        }, 700);


        setTimeout(() => {

            enteredCode =
                "";


            if (phoneDisplaySpan) {

                phoneDisplaySpan.textContent =
                    "";

            }


            if (phoneDisplayText) {

                phoneDisplayText.textContent =
                    "Inserisci il codice";

            }

        }, 2500);

    }


    /* =====================================================
       TASTIERINO TELEFONO
    ===================================================== */

    const keypadButtons =
        document.querySelectorAll(
            ".phone-keypad button"
        );


    keypadButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                (event) => {

                    event.stopPropagation();


                    if (
                        enteredCode ===
                        correctCode
                    ) {

                        return;
                    }


                    const value =
                        button.textContent.trim();


                    if (
                        !/^[0-9]$/.test(
                            value
                        )
                    ) {

                        return;
                    }


                    if (
                        enteredCode.length >=
                        8
                    ) {

                        return;
                    }


                    enteredCode +=
                        value;


                    if (phoneDisplaySpan) {

                        phoneDisplaySpan.textContent =
                            enteredCode;

                    }


                    if (
                        enteredCode.length ===
                        8
                    ) {

                        checkPhoneCode();

                    }

                }
            );

        }
    );


    /* =====================================================
       FUNZIONE MOSTRA GIRADISCHI
    ===================================================== */

    function showRecordSection() {

        if (!recordSection) {

            console.error(
                "Errore: #record-section non esiste nell'HTML."
            );

            return;
        }


        recordSection.style.display =
            "flex";


        recordSection.style.opacity =
            "0";


        recordSection.classList.add(
            "record-visible"
        );


        requestAnimationFrame(() => {

            recordSection.style.transition =
                "opacity 0.8s ease";


            recordSection.style.opacity =
                "1";

        });

    }


    /* =====================================================
       GIRADISCHI — CONTROLLO ELEMENTI
    ===================================================== */

    if (
        !recordSection ||
        !recordSource ||
        !turntablePlatter ||
        !recordOnPlayer ||
        !recordMessage ||
        !musicControls ||
        !playPauseMusic
    ) {

        console.warn(
            "Il giradischi non è presente o mancano alcuni elementi."
        );

    } else {


        /* =================================================
           STATO GIRADISCHI
        ================================================= */

        let recordInserted =
            false;


        /* =================================================
           SPOTIFY
        ================================================= */

        const spotifyTrackUri =
            "spotify:track:5l6hpyTGBK0LAAxgPnqTQL";


        let spotifyController =
            null;


        let spotifyReady =
            false;


        let spotifyPlaying =
            false;


        /* =================================================
           STATO INIZIALE GIRADISCHI
        ================================================= */

        recordSection.style.display =
            "none";


        recordSection.style.opacity =
            "0";


        recordSection.classList.remove(
            "record-visible"
        );


        recordSource.classList.remove(
            "dragging"
        );


        recordOnPlayer.classList.remove(
            "active"
        );


        recordMessage.classList.remove(
            "active"
        );


        musicControls.classList.remove(
            "active"
        );


        if (spotifyPlayerWrapper) {

            spotifyPlayerWrapper.classList.remove(
                "active"
            );

        }


        if (spotifyOpenLink) {

            spotifyOpenLink.classList.remove(
                "active"
            );

        }


        /* =================================================
           CARICAMENTO SPOTIFY IFRAME API
        ================================================= */

        function loadSpotifyAPI() {

            if (
                window.SpotifyIframeApi
            ) {

                return;
            }


            const existingScript =
                document.querySelector(
                    'script[src="https://open.spotify.com/embed/iframe-api/v1"]'
                );


            if (existingScript) {
                return;
            }


            const script =
                document.createElement(
                    "script"
                );


            script.src =
                "https://open.spotify.com/embed/iframe-api/v1";


            script.async =
                true;


            document.body.appendChild(
                script
            );

        }


        /* =================================================
           SPOTIFY API
        ================================================= */

        window.onSpotifyIframeApiReady =
            function (IFrameAPI) {

                if (
                    !spotifyEmbed
                ) {

                    console.error(
                        "Elemento #spotifyEmbed non trovato."
                    );

                    return;
                }


                const options = {

                    width: "100%",

                    height: "152",

                    uri: spotifyTrackUri

                };


                IFrameAPI.createController(
                    spotifyEmbed,
                    options,
                    (EmbedController) => {

                        spotifyController =
                            EmbedController;


                        spotifyReady =
                            true;


                        console.log(
                            "Spotify Embed pronto."
                        );


                        /* =================================
                           PLAYBACK STARTED
                        ================================= */

                        spotifyController.addListener(
                            "playback_started",
                            () => {

                                spotifyPlaying =
                                    true;


                                playPauseMusic.textContent =
                                    "❚❚";


                                recordOnPlayer.classList.add(
                                    "active"
                                );


                                updateMusicStatus(
                                    "In riproduzione ❤️"
                                );

                            }
                        );


                        /* =================================
                           PLAYBACK UPDATE
                        ================================= */

                        spotifyController.addListener(
                            "playback_update",
                            (event) => {

                                if (
                                    event &&
                                    event.data
                                ) {

                                    spotifyPlaying =
                                        !event.data.isPaused;


                                    playPauseMusic.textContent =
                                        event.data.isPaused
                                            ? "▶"
                                            : "❚❚";


                                    recordOnPlayer.classList.toggle(
                                        "active",
                                        !event.data.isPaused
                                    );


                                    updateMusicStatus(
                                        event.data.isPaused
                                            ? "In pausa"
                                            : "In riproduzione ❤️"
                                    );

                                }

                            }
                        );

                    }
                );

            };


        /* =================================================
           AGGIORNA STATO MUSICA
        ================================================= */

        function updateMusicStatus(text) {

            const status =
                document.querySelector(
                    ".music-status"
                );


            if (status) {

                status.textContent =
                    text;

            }

        }


        /* =================================================
           MOSTRA PLAYER SPOTIFY
        ================================================= */

        function showSpotifyPlayer() {

            if (spotifyPlayerWrapper) {

                spotifyPlayerWrapper.classList.add(
                    "active"
                );

            }


            if (spotifyOpenLink) {

                spotifyOpenLink.classList.add(
                    "active"
                );

            }

        }


        /* =================================================
           DRAG START
        ================================================= */

        recordSource.addEventListener(
            "dragstart",
            (event) => {

                if (recordInserted) {

                    event.preventDefault();

                    return;
                }


                recordSource.classList.add(
                    "dragging"
                );


                event.dataTransfer.effectAllowed =
                    "move";


                event.dataTransfer.setData(
                    "text/plain",
                    "vinyl"
                );

            }
        );


        /* =================================================
           DRAG END
        ================================================= */

        recordSource.addEventListener(
            "dragend",
            () => {

                recordSource.classList.remove(
                    "dragging"
                );

            }
        );


        /* =================================================
           DRAG OVER
        ================================================= */

        turntablePlatter.addEventListener(
            "dragover",
            (event) => {

                if (recordInserted) {
                    return;
                }


                event.preventDefault();


                event.dataTransfer.dropEffect =
                    "move";

            }
        );


        /* =================================================
           DROP VINILE
        ================================================= */

        turntablePlatter.addEventListener(
            "drop",
            (event) => {

                event.preventDefault();


                if (recordInserted) {
                    return;
                }


                const data =
                    event.dataTransfer.getData(
                        "text/plain"
                    );


                if (
                    data !==
                    "vinyl"
                ) {

                    return;
                }


                insertRecord();

            }
        );


        /* =================================================
           INSERIMENTO VINILE
        ================================================= */

        function insertRecord() {

            if (recordInserted) {
                return;
            }


            recordInserted =
                true;


            /* -----------------------------------------
               NASCONDE VINILE ORIGINALE
            ----------------------------------------- */

            recordSource.style.transition =
                "opacity 0.3s ease, transform 0.3s ease";


            recordSource.style.opacity =
                "0";


            recordSource.style.transform =
                "scale(0.7)";


            recordSource.style.pointerEvents =
                "none";


            /* -----------------------------------------
               VINILE SUL GIRADISCHI
            ----------------------------------------- */

            setTimeout(() => {

                recordOnPlayer.classList.add(
                    "active"
                );

            }, 300);


            /* -----------------------------------------
               MESSAGGIO
            ----------------------------------------- */

            setTimeout(() => {

                recordMessage.classList.add(
                    "active"
                );

            }, 700);


            /* -----------------------------------------
               PLAYER SPOTIFY
            ----------------------------------------- */

            setTimeout(() => {

                showSpotifyPlayer();

            }, 900);


            /* -----------------------------------------
               CONTROLLI
            ----------------------------------------- */

            setTimeout(() => {

                musicControls.classList.add(
                    "active"
                );

            }, 1100);


            /* -----------------------------------------
               TENTATIVO PLAY
            ----------------------------------------- */

            setTimeout(() => {

                tryPlaySpotify();

            }, 1300);

        }


        /* =================================================
           PLAY SPOTIFY
        ================================================= */

        function tryPlaySpotify() {

            if (
                !spotifyController ||
                !spotifyReady
            ) {

                updateMusicStatus(
                    "Premi play per ascoltare ❤️"
                );


                playPauseMusic.textContent =
                    "▶";


                return;
            }


            try {

                spotifyController.play();

            } catch (error) {

                console.warn(
                    "Spotify non ha consentito la riproduzione automatica.",
                    error
                );


                playPauseMusic.textContent =
                    "▶";


                updateMusicStatus(
                    "Premi play per ascoltare ❤️"
                );

            }

        }


        /* =================================================
           PLAY / PAUSA PERSONALIZZATO
        ================================================= */

        playPauseMusic.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                event.stopPropagation();


                if (
                    !spotifyController ||
                    !spotifyReady
                ) {

                    updateMusicStatus(
                        "Spotify sta caricando..."
                    );


                    return;
                }


                try {

                    if (spotifyPlaying) {

                        spotifyController.pause();

                    } else {

                        spotifyController.play();

                    }

                } catch (error) {

                    console.warn(
                        "Errore controllo Spotify:",
                        error
                    );

                }

            }
        );


        /* =================================================
           CLICK VINILE — MOBILE
        ================================================= */

        recordSource.addEventListener(
            "click",
            () => {

                if (recordInserted) {
                    return;
                }


                insertRecord();

            }
        );


        /* =================================================
           CARICA SPOTIFY
        ================================================= */

        loadSpotifyAPI();

    }


    /* =====================================================
       PRELOAD FOTO
    ===================================================== */

    photos.forEach(
        (photo) => {

            const preload =
                new Image();


            preload.src =
                "foto/" + photo.file;

        }
    );


    /* =====================================================
       STATO INIZIALE PAGINA
    ===================================================== */

    album.style.opacity =
        "0";


    letterSection.classList.remove(
        "show-letter"
    );


    letterPage.style.display =
        "none";


    letterPage.style.opacity =
        "0";


    phoneSection.classList.remove(
        "phone-visible"
    );


    phoneSection.style.display =
        "none";


    phoneSection.style.opacity =
        "0";


    phoneSection.style.transform =
        "scale(1)";


    flipPhone.classList.remove(
        "phone-open"
    );


    /* =====================================================
       FOTO INIZIALE
    ===================================================== */

    showPhoto(0);
/* =====================================================
   SCHERMATA FINALE
===================================================== */

const recordNextButton =
    document.getElementById(
        "recordNextButton"
    );

const finalSection =
    document.getElementById(
        "final-section"
    );

const birthdayCake =
    document.getElementById(
        "birthdayCake"
    );

const childPhotoContainer =
    document.getElementById(
        "childPhotoContainer"
    );

const finalMessage =
    document.querySelector(
        ".final-message"
    );


/* =====================================================
   CONTROLLO
===================================================== */

if (
    !recordNextButton ||
    !finalSection ||
    !birthdayCake ||
    !childPhotoContainer ||
    !finalMessage
) {

    console.error(
        "Errore: elementi della schermata finale mancanti."
    );

} else {


    /* =================================================
       STATO INIZIALE
    ================================================= */

    finalSection.classList.remove(
        "final-visible"
    );

    childPhotoContainer.classList.remove(
        "photo-visible"
    );

    finalMessage.classList.remove(
        "message-visible"
    );

    birthdayCake.classList.remove(
        "cake-open"
    );


    /* =================================================
       FRECCIA SEMPRE VISIBILE
       
       NON aspettiamo Spotify.
       NON aspettiamo la canzone.
       NON aspettiamo il player.
    ================================================= */

    recordNextButton.style.display =
        "flex";

    recordNextButton.style.opacity =
        "1";

    recordNextButton.style.visibility =
        "visible";


    /* =================================================
       GIRADISCHI → FINALE
    ================================================= */

    recordNextButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            /* -----------------------------
               NASCONDE GIRADISCHI
            ----------------------------- */

            if (recordSection) {

                recordSection.style.transition =
                    "opacity 0.7s ease";

                recordSection.style.opacity =
                    "0";

            }


            /* -----------------------------
               DOPO LA TRANSIZIONE
            ----------------------------- */

            setTimeout(
                function () {

                    if (recordSection) {

                        recordSection.style.display =
                            "none";

                    }


                    /* -------------------------
                       MOSTRA FINALE
                    ------------------------- */

                    finalSection.style.display =
                        "flex";


                    requestAnimationFrame(
                        function () {

                            finalSection.classList.add(
                                "final-visible"
                            );

                        }
                    );

                },
                700
            );

        }
    );


    /* =================================================
       TORTA → FOTO
    ================================================= */

    birthdayCake.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            event.stopPropagation();


            if (
                birthdayCake.classList.contains(
                    "cake-open"
                )
            ) {

                return;

            }


            /* -----------------------------
               ANIMAZIONE TORTA
            ----------------------------- */

            birthdayCake.classList.add(
                "cake-open"
            );


            /* -----------------------------
               MOSTRA FOTO
            ----------------------------- */

            setTimeout(
                function () {

                    childPhotoContainer.classList.add(
                        "photo-visible"
                    );


                    /* -------------------------
                       MOSTRA FRASE
                    ------------------------- */

                    setTimeout(
                        function () {

                            finalMessage.classList.add(
                                "message-visible"
                            );

                        },
                        500
                    );

                },
                450
            );

        }
    );


    /* =================================================
       ACCESSIBILITÀ — ENTER / SPAZIO
    ================================================= */

    birthdayCake.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                birthdayCake.click();

            }

        }
    );

}

});