let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    draggedPiece;



    function changeBGImage() {
        puzzleBoard.getElementsByClassName.backgroundImage = `url(images/background$(this.id).jpg)`;
    }

    function handleStartDrag() {
        console.log('started dragging this piece:', this);
        draggedPiece = this;
    }

    theButtons.forEach(button => button.addEventListener('click', changeBGImage));
    puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));