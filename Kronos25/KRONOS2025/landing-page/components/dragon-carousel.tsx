"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function DragonCarousel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dragonImages = [
    "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/cf100756-828d-41a9-aacb-7c4d2394f048/35294a16-dbd3-44dd-84ee-198ad32f17f5.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d26a519-f4a9-4786-aee3-512857c0481b/dgjnmkf-ae9dd08e-5268-496f-bb4b-19ae06b2a27d.png/v1/fill/w_894,h_894,q_70,strp/draconomicon__1_flashburn_by_saralgam1980_dgjnmkf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzNkMjZhNTE5LWY0YTktNDc4Ni1hZWUzLTUxMjg1N2MwNDgxYlwvZGdqbm1rZi1hZTlkZDA4ZS01MjY4LTQ5NmYtYmI0Yi0xOWFlMDZiMmEyN2QucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FDowGQBauuHwxBPq9VbDqHjPis6QO2BnvI_T6PQSY5U",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eae8a3eb-7b8f-4680-a177-64afc2f067b3/dgf2ke0-8c788fee-128f-4876-a705-157d4c6e4559.jpg/v1/fill/w_894,h_894,q_70,strp/celestial_dragon_azriel_by_elka0815_dgf2ke0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2VhZThhM2ViLTdiOGYtNDY4MC1hMTc3LTY0YWZjMmYwNjdiM1wvZGdmMmtlMC04Yzc4OGZlZS0xMjhmLTQ4NzYtYTcwNS0xNTdkNGM2ZTQ1NTkuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EeLW4iZ4y4sGGybW7E9ik6yNX6rAIU3gkJ_Y4PDbQxQ",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0427a1a6-ac8d-4ef8-a528-cccfe28d550d/dguaudq-e70c1819-df5a-4863-9b0d-ba0ae995071c.jpg/v1/fill/w_1280,h_1920,q_75,strp/cosmic_void_dragon_by_hyper1art_dguaudq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzA0MjdhMWE2LWFjOGQtNGVmOC1hNTI4LWNjY2ZlMjhkNTUwZFwvZGd1YXVkcS1lNzBjMTgxOS1kZjVhLTQ4NjMtOWIwZC1iYTBhZTk5NTA3MWMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.v5Hm1-xXCECJ4SPK76X_FUJcYhjc9Z0tPx4MhKnCWNE",
    "https://i.pinimg.com/736x/f2/7c/27/f27c27a9a12cd318e7265feca887ef53.jpg",
    "https://img.freepik.com/premium-photo/dragon-like-creature-generative-ai_902049-46484.jpg",
    "https://i.pinimg.com/originals/fb/fd/50/fbfd5070d5d8a629824eb285b5751187.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a3d5aa8a-8207-4b93-8164-3918ffaff346/dfimd50-93f96e7c-7906-480f-a2a2-1d978305346f.png/v1/fill/w_1095,h_730,q_70,strp/chaos_dragon_of_tzeentch_by_nanakoac_dfimd50-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2EzZDVhYThhLTgyMDctNGI5My04MTY0LTM5MThmZmFmZjM0NlwvZGZpbWQ1MC05M2Y5NmU3Yy03OTA2LTQ4MGYtYTJhMi0xZDk3ODMwNTM0NmYucG5nIiwid2lkdGgiOiI8PTE1MzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7CakwHInL7OZ05XcRAofw5yu5xV4xDxgn3dndM6F_uk",
    "https://wallpaperaccess.com/full/27733.jpg",
    "https://i.pinimg.com/originals/a2/11/04/a21104e3d956ae276f22e4fad02caf8e.jpg",
  ]

  if (!mounted) return null

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 } as React.CSSProperties}>
        {dragonImages.map((src, index) => (
          <div key={index} className="item" style={{ "--position": index + 1 } as React.CSSProperties}>
            <img
              src={src || "/placeholder.svg"}
              alt={`Dragon ${index + 1}`}
              width={200}
              height={250}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className="content" style={{ textAlign: "center" }}>
        <h1 style={{ color: "white" }}>Dragons</h1>
        <div className="author">
          <h2>titan_.dev</h2>
          <p>
            <b>Web Design css</b>
          </p>
          <p>The True dragons</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  )
}

