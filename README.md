8x8 board

[8][8]

64 game pieces ('disks')

Players take turns by placing disks on the board with own color face up.

IF do
  IF (disksSequence) do
    disksSequence.all?{ |disk| disk.color === enemy } &&
    disksSequence.all? do |disk|
      disk.boundedBy(disks.lastPlaced,otherDisk) && otherDisk.color === currentPlayer
    end
  end

  THEN do
    disksSequence.map!{ |disk| disk.toggleColor }
  end
end

IF do
  var count = disks.select{ |disk| disk.color === player }

  if count.length > disks.length/2 + 1
  THEN do
    Player wins.
  end
ELSIF
  disks.select{ |disk| disk.color === enemy }

  THEN do
    Player loses.
  end
ELSE
  Continue playing.
end
