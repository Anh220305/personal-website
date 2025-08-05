"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Minimize2, Maximize2 } from "lucide-react"

interface TerminalProps {
  isOpen: boolean
  onClose: () => void
}

interface ChessBoard {
  board: (string | null)[][]
  currentPlayer: "white" | "black"
  selectedSquare: [number, number] | null
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [currentMode, setCurrentMode] = useState<"terminal" | "chess">("terminal")
  const [lastLogin, setLastLogin] = useState<string>("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [chessBoard, setChessBoard] = useState<ChessBoard>({
    board: initializeChessBoard(),
    currentPlayer: "white",
    selectedSquare: null,
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const terminalBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setLastLogin(new Date().toLocaleString())
      if (inputRef.current) {
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus()
          }
        }, 100)
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (currentMode === "terminal" && isOpen && inputRef.current) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)
    }
  }, [currentMode, isOpen])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !isMobile && terminalBoxRef.current && !terminalBoxRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen && !isMobile) {
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 100)

      return () => {
        clearTimeout(timer)
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isOpen, onClose, isMobile])

  const dragonflyFacts = [
    "Dragonflies have been around for over 300 million years, making them one of the oldest insect species on Earth.",
    "A dragonfly can see in almost every direction at once thanks to their compound eyes with up to 30,000 facets.",
    "Dragonflies are incredible hunters with a 95% success rate when catching prey.",
    "Some dragonflies can fly at speeds of up to 35 mph and can hover, fly backwards, and make sharp turns.",
    "Dragonflies spend most of their lives underwater as nymphs before emerging as flying adults.",
    "The largest dragonfly ever discovered had a wingspan of over 2 feet during the Permian period.",
    "Dragonflies cannot walk despite having six legs - they can only perch and fly.",
    "A dragonfly's wings move independently, allowing for incredible aerial maneuverability.",
  ]

  const oraclePredictions = [
    "In 3-5 business days, you will encounter a duck that changes your perspective on water.",
    "Within the next lunar cycle, a forgotten password will unlock more than just an account.",
    "Tuesday holds the key to a conversation you've been avoiding since last spring.",
    "A yellow object will appear in your peripheral vision exactly when you need guidance most.",
    "The number 7 will manifest in unexpected ways over the next fortnight.",
    "Someone wearing blue will offer you something you didn't know you needed.",
    "A book will fall open to page 42, revealing words meant specifically for your current situation.",
    "The next time you hear your favorite song, pay attention to who's nearby.",
    "A small act of kindness you perform this week will ripple back to you in October.",
    "The answer you seek lies in the third email you receive tomorrow.",
    "A stranger's laugh will remind you of something important you've forgotten.",
    "The next rainy day will bring clarity to a decision you've been postponing.",
    "A green door will present itself as a metaphor for the choice you must make.",
    "The universe will send you a sign through the medium of coffee shop conversations.",
    "Your future self is trying to communicate through the pattern of fallen leaves.",
  ]

  const nietzscheQuotes = [
    "What does not kill me, makes me stronger.",
    "He who has a why to live can bear almost any how.",
    "One must still have chaos in oneself to be able to give birth to a dancing star.",
    "The individual has always had to struggle not to be overwhelmed by the tribe.",
    "Become who you are!",
    "God is dead! God remains dead! And we have killed him.",
    "The higher we soar the smaller we appear to those who cannot fly.",
    "In every real man a child is hidden that wants to play.",
    "The advantage of a bad memory is that one enjoys several times the same good things for the first time.",
    "All truly great thoughts are conceived while walking.",
    "The snake which cannot cast its skin has to die.",
    "You must be ready to burn yourself in your own flame; how could you rise anew if you have not first become ashes?",
    "The most common lie is that which one lies to himself.",
    "A casual stroll through the lunatic asylum shows that faith does not prove anything.",
    "The thought of suicide is a great consolation: by means of it one gets through many a dark night.",
    "There is always madness in love. But there is also always some reason in madness.",
    "The man of knowledge must be able not only to love his enemies but also to hate his friends.",
    "Whoever fights monsters should see to it that in the process he does not become a monster.",
  ]

  function initializeChessBoard(): (string | null)[][] {
    const board: (string | null)[][] = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null))

    board[7] = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
    board[6] = Array(8).fill("♙")

    board[0] = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"]
    board[1] = Array(8).fill("♟")

    return board
  }

  function isValidMove(
    board: (string | null)[][],
    fromRow: number,
    fromCol: number,
    toRow: number,
    toCol: number,
    currentPlayer: "white" | "black",
  ): boolean {
    const piece = board[fromRow][fromCol]
    if (!piece) return false

    const isWhitePiece = ["♔", "♕", "♖", "♗", "♘", "♙"].includes(piece)
    const isBlackPiece = ["♚", "♛", "♜", "♝", "♞", "♟"].includes(piece)

    if ((currentPlayer === "white" && !isWhitePiece) || (currentPlayer === "black" && !isBlackPiece)) {
      return false
    }

    const targetPiece = board[toRow][toCol]
    if (targetPiece) {
      const targetIsWhite = ["♔", "♕", "♖", "♗", "♘", "♙"].includes(targetPiece)
      if ((isWhitePiece && targetIsWhite) || (isBlackPiece && !targetIsWhite)) {
        return false
      }
    }

    const rowDiff = Math.abs(toRow - fromRow)
    const colDiff = Math.abs(toCol - fromCol)

    switch (piece) {
      case "♙": 
        if (fromCol !== toCol) return false 
        if (fromRow === 6 && toRow === 4 && !board[5][fromCol] && !board[4][fromCol]) return true 
        if (toRow === fromRow - 1 && !board[toRow][toCol]) return true 
        return false

      case "♟": 
        if (fromCol !== toCol) return false 
        if (fromRow === 1 && toRow === 3 && !board[2][fromCol] && !board[3][fromCol]) return true 
        if (toRow === fromRow + 1 && !board[toRow][toCol]) return true 
        return false

      case "♖":
      case "♜": 
        if (rowDiff === 0 || colDiff === 0) {
          return isPathClear(board, fromRow, fromCol, toRow, toCol)
        }
        return false

      case "♗":
      case "♝": 
        if (rowDiff === colDiff) {
          return isPathClear(board, fromRow, fromCol, toRow, toCol)
        }
        return false

      case "♕":
      case "♛": 
        if (rowDiff === 0 || colDiff === 0 || rowDiff === colDiff) {
          return isPathClear(board, fromRow, fromCol, toRow, toCol)
        }
        return false

      case "♔":
      case "♚": 
        return rowDiff <= 1 && colDiff <= 1

      case "♘":
      case "♞": 
        return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)

      default:
        return false
    }
  }

  function isPathClear(
    board: (string | null)[][],
    fromRow: number,
    fromCol: number,
    toRow: number,
    toCol: number,
  ): boolean {
    const rowStep = toRow > fromRow ? 1 : toRow < fromRow ? -1 : 0
    const colStep = toCol > fromCol ? 1 : toCol < fromCol ? -1 : 0

    let currentRow = fromRow + rowStep
    let currentCol = fromCol + colStep

    while (currentRow !== toRow || currentCol !== toCol) {
      if (board[currentRow][currentCol] !== null) {
        return false
      }
      currentRow += rowStep
      currentCol += colStep
    }

    return true
  }

  function getAllValidMoves(board: (string | null)[][], player: "white" | "black"): [number, number, number, number][] {
    const moves: [number, number, number, number][] = []

    for (let fromRow = 0; fromRow < 8; fromRow++) {
      for (let fromCol = 0; fromCol < 8; fromCol++) {
        const piece = board[fromRow][fromCol]
        if (!piece) continue

        const isWhitePiece = ["♔", "♕", "♖", "♗", "♘", "♙"].includes(piece)
        if ((player === "white" && !isWhitePiece) || (player === "black" && isWhitePiece)) continue

        for (let toRow = 0; toRow < 8; toRow++) {
          for (let toCol = 0; toCol < 8; toCol++) {
            if (isValidMove(board, fromRow, fromCol, toRow, toCol, player)) {
              moves.push([fromRow, fromCol, toRow, toCol])
            }
          }
        }
      }
    }

    return moves
  }

  function makeAIMove(board: (string | null)[][]): (string | null)[][] {
    const validMoves = getAllValidMoves(board, "black")
    if (validMoves.length === 0) return board

    const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)]
    const [fromRow, fromCol, toRow, toCol] = randomMove

    const newBoard = board.map((row) => [...row])
    newBoard[toRow][toCol] = newBoard[fromRow][fromCol]
    newBoard[fromRow][fromCol] = null

    return newBoard
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    const args = command.split(" ")
    const baseCommand = args[0]

    setHistory((prev) => [...prev, `madn@anhOS $ ${cmd}`])

    switch (baseCommand) {
      case "help":
        if (args.length > 1) {
          const helpCommand = args[1]
          switch (helpCommand) {
            case "dragonfly":
              setHistory((prev) => [...prev, "dragonfly - Display random facts about dragonflies", "Usage: dragonfly"])
              break
            case "chess":
              setHistory((prev) => [...prev, "chess - Start an interactive chess game", "Usage: chess"])
              break
            case "oracle":
              setHistory((prev) => [...prev, "oracle - Gives vague LLM-style predictions", "Usage: oracle"])
              break
            case "nietzsche":
              setHistory((prev) => [
                ...prev,
                "nietzsche - Invokes a Nietzschean system reflection",
                "Combines existential diagnostics, random aphorisms, and philosophical prompts",
                "drawn from Thus Spoke Zarathustra, The Gay Science, and Beyond Good and Evil",
                "Use it when you need a bit of introspection",
                "Usage: nietzsche",
              ])
              break
            default:
              setHistory((prev) => [...prev, `No help available for command: ${helpCommand}`])
          }
        } else {
          setHistory((prev) => [
            ...prev,
            "Available commands:",
            "dragonfly",
            "chess",
            "oracle",
            "nietzsche",
            "",
            'For more information on a specific command, try "help <command>" or use the "--help" flag.',
          ])
        }
        break

      case "dragonfly":
        const randomFact = dragonflyFacts[Math.floor(Math.random() * dragonflyFacts.length)]
        setHistory((prev) => [...prev, `🜸 ${randomFact}`])
        break

      case "oracle":
        const randomPrediction = oraclePredictions[Math.floor(Math.random() * oraclePredictions.length)]
        setHistory((prev) => [...prev, `🔮 The Oracle speaks: ${randomPrediction}`])
        break

      case "nietzsche":
        const randomQuote = nietzscheQuotes[Math.floor(Math.random() * nietzscheQuotes.length)]
        setHistory((prev) => [
          ...prev,
          "⚡ Nietzschean System Reflection ⚡",
          "",
          `"${randomQuote}"`,
          "",
          "Consider: What masks are you wearing today?",
          "Reflect: Are you creating your own values, or merely inheriting them?",
          "Question: What would you do if you had to live this exact life infinite times?",
          "",
          "The abyss gazes also into you...",
        ])
        break

      case "chess":
        setCurrentMode("chess")
        setChessBoard({
          board: initializeChessBoard(),
          currentPlayer: "white",
          selectedSquare: null,
        })
        setHistory((prev) => [...prev, "Starting chess game... You are white, Anh is black."])
        break

      case "clear":
        setHistory([])
        break

      case "exit":
        onClose()
        break

      default:
        setHistory((prev) => [...prev, `Command not recognized: "${cmd}"`, 'Please type "help" for other options.'])
    }
  }

  const handleChessSquareClick = (row: number, col: number) => {
    if (chessBoard.currentPlayer !== "white") return 

    if (chessBoard.selectedSquare) {
      const [fromRow, fromCol] = chessBoard.selectedSquare

      if (isValidMove(chessBoard.board, fromRow, fromCol, row, col, "white")) {
        const newBoard = chessBoard.board.map((row) => [...row])
        newBoard[row][col] = newBoard[fromRow][fromCol]
        newBoard[fromRow][fromCol] = null

        setChessBoard({
          board: newBoard,
          currentPlayer: "black",
          selectedSquare: null,
        })

        setTimeout(() => {
          const aiBoard = makeAIMove(newBoard)
          setChessBoard((prev) => ({
            ...prev,
            board: aiBoard,
            currentPlayer: "white",
          }))
        }, 500)
      } else {
        setChessBoard({
          ...chessBoard,
          selectedSquare: null,
        })
      }
    } else if (chessBoard.board[row][col]) {
      const piece = chessBoard.board[row][col]
      const isWhitePiece = ["♔", "♕", "♖", "♗", "♘", "♙"].includes(piece!)
      if (isWhitePiece) {
        setChessBoard({
          ...chessBoard,
          selectedSquare: [row, col],
        })
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
      setInput("")
    }
  }

  const handleTerminalClick = () => {
    if (currentMode === "terminal" && inputRef.current && !isMobile) {
      inputRef.current.focus()
    }
  }

  if (!isOpen) return null

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-black border border-gray-600 rounded-lg overflow-hidden font-mono max-h-[70vh] flex flex-col">
          
          <div className="bg-gray-800 px-3 py-2 flex items-center justify-between border-b border-gray-600 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white text-xs">Terminal {currentMode === "chess" ? "> Chess" : ""}</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700 touch-manipulation"
              aria-label="Close terminal"
            >
              <X size={16} />
            </button>
          </div>

          
          {currentMode === "chess" ? (
            <div className="flex-1 p-3 flex flex-col items-center justify-center overflow-auto">
              <div className="grid grid-cols-8 gap-0 border border-white mb-3 max-w-[240px]">
                {chessBoard.board.map((row, rowIndex) =>
                  row.map((piece, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`w-7 h-7 flex items-center justify-center text-sm cursor-pointer border touch-manipulation ${
                        (rowIndex + colIndex) % 2 === 0 ? "bg-gray-600" : "bg-gray-800"
                      } ${
                        chessBoard.selectedSquare &&
                        chessBoard.selectedSquare[0] === rowIndex &&
                        chessBoard.selectedSquare[1] === colIndex
                          ? "ring-1 ring-blue-400"
                          : ""
                      }`}
                      onClick={() => handleChessSquareClick(rowIndex, colIndex)}
                    >
                      <span className={piece && piece.match(/[♔♕♖♗♘♙]/) ? "text-white" : "text-blue-400"}>{piece}</span>
                    </div>
                  )),
                )}
              </div>
              <div className="text-white text-xs mb-3 text-center px-2">
                {chessBoard.currentPlayer === "white" ? "Your turn (White)" : "Anh is thinking... (Black)"}
              </div>
              <button
                onClick={() => setCurrentMode("terminal")}
                className="text-green-400 hover:text-green-300 text-xs bg-gray-800 px-4 py-2 rounded touch-manipulation"
              >
                Back to terminal
              </button>
            </div>
          ) : (
            <>
              
              <div ref={terminalRef} className="flex-1 p-3 text-green-400 text-xs overflow-y-auto overscroll-contain">
                <div className="mb-3">
                  <div>Welcome to anhOS!</div>
                  <div>Type "help" for commands.</div>
                  <div className="mt-1 text-xs opacity-75">Last login: {lastLogin}</div>
                </div>

                {history.map((line, index) => (
                  <div key={index} className="whitespace-pre-wrap break-words mb-1 leading-tight">
                    {line}
                  </div>
                ))}
              </div>

              
              <div className="bg-gray-900 border-t border-gray-700 p-3 flex-shrink-0">
                <div className="flex items-center text-green-400 text-xs">
                  <span className="mr-1 flex-shrink-0">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleCommand(input)
                        setInput("")
                      }
                    }}
                    className="flex-1 bg-transparent outline-none text-green-400 min-w-0 text-xs py-1 px-2 border border-gray-600 rounded focus:border-green-400 focus:ring-1 focus:ring-green-400"
                    placeholder="Type command..."
                    autoFocus
                    inputMode="text"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    enterKeyHint="send"
                    style={{
                      fontSize: "16px", 
                      WebkitAppearance: "none",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={terminalBoxRef}
        className={`w-full max-w-4xl bg-black border border-gray-600 rounded-lg overflow-hidden font-mono transition-all duration-300 ${
          isMinimized ? "h-12" : "h-[80vh]"
        }`}
      >
        
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-600">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-white text-sm ml-4">Terminal {currentMode === "chess" ? "> Chess" : ""}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700"
              aria-label="Minimize terminal"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700"
              aria-label="Close terminal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        
        {!isMinimized && (
          <div className="h-full flex flex-col" onClick={handleTerminalClick}>
            {currentMode === "chess" ? (
              <div className="flex-1 p-4 flex flex-col items-center justify-center">
                <div className="grid grid-cols-8 gap-0 border-2 border-white mb-4">
                  {chessBoard.board.map((row, rowIndex) =>
                    row.map((piece, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-12 h-12 flex items-center justify-center text-2xl cursor-pointer border ${
                          (rowIndex + colIndex) % 2 === 0 ? "bg-gray-600" : "bg-gray-800"
                        } ${
                          chessBoard.selectedSquare &&
                          chessBoard.selectedSquare[0] === rowIndex &&
                          chessBoard.selectedSquare[1] === colIndex
                            ? "ring-2 ring-blue-400"
                            : ""
                        }`}
                        onClick={() => handleChessSquareClick(rowIndex, colIndex)}
                      >
                        <span className={piece && piece.match(/[♔♕♖♗♘♙]/) ? "text-white" : "text-blue-400"}>
                          {piece}
                        </span>
                      </div>
                    )),
                  )}
                </div>
                <div className="text-white text-sm mb-4">
                  {chessBoard.currentPlayer === "white" ? "Your turn (White)" : "Anh is thinking... (Black)"}
                </div>
                <button
                  onClick={() => setCurrentMode("terminal")}
                  className="text-green-400 hover:text-green-300 text-sm"
                >
                  Back to terminal
                </button>
              </div>
            ) : (
              <>
                <div ref={terminalRef} className="flex-1 p-4 text-green-400 text-sm overflow-y-auto">
                  <div className="mb-4">
                    <div>Welcome to anhOS!</div>
                    <div>For available commands, try "help".</div>
                    <div className="mt-2">Last login: {lastLogin}</div>
                  </div>

                  {history.map((line, index) => (
                    <div key={index} className="whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-700">
                  <div className="flex items-center text-green-400 text-sm">
                    <span className="mr-2">madn@anhOS $</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 bg-transparent outline-none text-green-400"
                      autoFocus
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
