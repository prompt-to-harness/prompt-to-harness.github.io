import { useEffect, useRef } from 'react'
import Phaser from 'phaser'

export default function DodgeGame() {
  const host = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO, width: 480, height: 320, parent: host.current!, backgroundColor: '#f7f4ee',
      scene: { create(this: Phaser.Scene) { this.add.rectangle(240, 160, 24, 24, 0x17664e) } },
    })
    return () => game.destroy(true)
  }, [])
  return <div ref={host} />
}
