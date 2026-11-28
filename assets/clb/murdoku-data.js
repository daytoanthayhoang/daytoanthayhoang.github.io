/* Mỗi đợt là một mục mới trong batches; giữ nguyên id các ván cũ. */
window.MURDOKU_DATA = {
  "batches": [
    {
      "id": "2026-11-28",
      "title": "Đợt 01 · 28/11/2026",
      "print": "assets/clb/murdoku-2026-11-28.pdf",
      "cases": [
        {
          "id": "van-01",
          "title": "Bí Ẩn Phòng Thí Nghiệm",
          "label": "Khởi động 1",
          "size": 5,
          "rooms": {
            "L": {
              "name": "Thư viện",
              "bg": "#dbeafe",
              "badgeBg": "#bfdbfe",
              "badgeText": "#1e40af",
              "cells": [
                [
                  0,
                  0
                ],
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ],
                [
                  1,
                  0
                ],
                [
                  1,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "label": "L"
            },
            "T": {
              "name": "Phòng Thí Nghiệm",
              "bg": "#fef3c7",
              "badgeBg": "#fde68a",
              "badgeText": "#92400e",
              "cells": [
                [
                  0,
                  3
                ],
                [
                  0,
                  4
                ],
                [
                  1,
                  3
                ],
                [
                  1,
                  4
                ],
                [
                  2,
                  3
                ],
                [
                  2,
                  4
                ]
              ],
              "label": "T"
            },
            "H": {
              "name": "Hành Lang",
              "bg": "#e2e8f0",
              "badgeBg": "#cbd5e1",
              "badgeText": "#334155",
              "cells": [
                [
                  2,
                  0
                ],
                [
                  2,
                  1
                ],
                [
                  2,
                  2
                ],
                [
                  3,
                  0
                ],
                [
                  3,
                  1
                ]
              ],
              "label": "H"
            },
            "C": {
              "name": "Phòng CLB",
              "bg": "#d1fae5",
              "badgeBg": "#a7f3d0",
              "badgeText": "#065f46",
              "cells": [
                [
                  3,
                  2
                ],
                [
                  3,
                  3
                ],
                [
                  3,
                  4
                ],
                [
                  4,
                  0
                ],
                [
                  4,
                  1
                ],
                [
                  4,
                  2
                ],
                [
                  4,
                  3
                ],
                [
                  4,
                  4
                ]
              ],
              "label": "C"
            }
          },
          "windows": [],
          "furniture": [
            {
              "type": "shelf",
              "cells": [
                [
                  0,
                  1
                ]
              ],
              "name": "Kệ sách",
              "occupiable": false
            },
            {
              "type": "lab",
              "cells": [
                [
                  1,
                  3
                ]
              ],
              "name": "Bàn TN",
              "occupiable": false
            },
            {
              "type": "plant",
              "cells": [
                [
                  3,
                  1
                ]
              ],
              "name": "Chậu cây",
              "occupiable": false
            },
            {
              "type": "board",
              "cells": [
                [
                  4,
                  3
                ]
              ],
              "name": "Bảng đen",
              "occupiable": false
            }
          ],
          "people": [
            {
              "code": "V",
              "name": "Nạn nhân",
              "isVictim": true,
              "color": "#dc2626"
            },
            {
              "code": "A",
              "name": "An",
              "color": "#2563eb"
            },
            {
              "code": "B",
              "name": "Bình",
              "color": "#7c3aed"
            },
            {
              "code": "C",
              "name": "Chi",
              "color": "#059669"
            },
            {
              "code": "D",
              "name": "Dũng",
              "color": "#d97706"
            }
          ],
          "clues": [
            "Nạn nhân (V) ở Hàng 2, bên trong Phòng Thí Nghiệm.",
            "Không có bất kỳ ai đứng ở Hành Lang.",
            "Bình (B) đang ở trong Phòng Thí Nghiệm.",
            "An (A) đang ở trong Thư viện.",
            "Dũng (D) đứng ngay phía dưới (ô liền kề bên dưới) Chậu cây."
          ],
          "solution": {
            "A": [
              0,
              0
            ],
            "V": [
              1,
              4
            ],
            "B": [
              2,
              3
            ],
            "C": [
              3,
              2
            ],
            "D": [
              4,
              1
            ]
          },
          "culprit": "B",
          "hint": "Bắt đầu từ hàng 2 của phòng thí nghiệm, rồi xét vị trí của Dũng."
        },
        {
          "id": "van-02",
          "title": "Bí Ẩn Phòng Nhạc",
          "label": "Khởi động 2",
          "size": 6,
          "rooms": {
            "S": {
              "name": "Sảnh Chính",
              "bg": "#e0e7ff",
              "badgeBg": "#c7d2fe",
              "badgeText": "#3730a3",
              "cells": [
                [
                  0,
                  0
                ],
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ],
                [
                  1,
                  0
                ],
                [
                  1,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "label": "S"
            },
            "P": {
              "name": "Phòng Nhạc",
              "bg": "#f3e8ff",
              "badgeBg": "#e9d5ff",
              "badgeText": "#6b21a8",
              "cells": [
                [
                  0,
                  3
                ],
                [
                  0,
                  4
                ],
                [
                  0,
                  5
                ],
                [
                  1,
                  3
                ],
                [
                  1,
                  4
                ],
                [
                  1,
                  5
                ]
              ],
              "label": "P"
            },
            "T": {
              "name": "Thư Viện",
              "bg": "#e0f2fe",
              "badgeBg": "#bae6fd",
              "badgeText": "#075985",
              "cells": [
                [
                  2,
                  0
                ],
                [
                  2,
                  1
                ],
                [
                  3,
                  0
                ],
                [
                  3,
                  1
                ],
                [
                  4,
                  0
                ],
                [
                  4,
                  1
                ]
              ],
              "label": "T"
            },
            "A": {
              "name": "Phòng Ăn",
              "bg": "#fef3c7",
              "badgeBg": "#fde68a",
              "badgeText": "#92400e",
              "cells": [
                [
                  2,
                  2
                ],
                [
                  2,
                  3
                ],
                [
                  2,
                  4
                ],
                [
                  2,
                  5
                ],
                [
                  3,
                  2
                ],
                [
                  3,
                  3
                ],
                [
                  3,
                  4
                ],
                [
                  3,
                  5
                ]
              ],
              "label": "A"
            },
            "G": {
              "name": "Sân Vườn",
              "bg": "#d1fae5",
              "badgeBg": "#a7f3d0",
              "badgeText": "#065f46",
              "cells": [
                [
                  4,
                  2
                ],
                [
                  4,
                  3
                ],
                [
                  4,
                  4
                ],
                [
                  4,
                  5
                ],
                [
                  5,
                  0
                ],
                [
                  5,
                  1
                ],
                [
                  5,
                  2
                ],
                [
                  5,
                  3
                ],
                [
                  5,
                  4
                ],
                [
                  5,
                  5
                ]
              ],
              "label": "G"
            }
          },
          "windows": [],
          "furniture": [
            {
              "type": "bell",
              "cells": [
                [
                  0,
                  1
                ]
              ],
              "name": "Lễ tân",
              "occupiable": false
            },
            {
              "type": "piano",
              "cells": [
                [
                  1,
                  4
                ]
              ],
              "name": "Đàn Piano",
              "occupiable": false
            },
            {
              "type": "table",
              "cells": [
                [
                  2,
                  3
                ]
              ],
              "name": "Bàn dài",
              "occupiable": false
            },
            {
              "type": "shelf",
              "cells": [
                [
                  3,
                  0
                ]
              ],
              "name": "Kệ sách",
              "occupiable": false
            },
            {
              "type": "fountain",
              "cells": [
                [
                  4,
                  4
                ]
              ],
              "name": "Đài nước",
              "occupiable": false
            },
            {
              "type": "chair",
              "cells": [
                [
                  5,
                  2
                ]
              ],
              "name": "Ghế đá",
              "occupiable": false
            }
          ],
          "people": [
            {
              "code": "V",
              "name": "Nạn nhân",
              "isVictim": true,
              "color": "#dc2626"
            },
            {
              "code": "H",
              "name": "Huy",
              "color": "#2563eb"
            },
            {
              "code": "K",
              "name": "Khánh",
              "color": "#0891b2"
            },
            {
              "code": "L",
              "name": "Lan",
              "color": "#9333ea"
            },
            {
              "code": "M",
              "name": "Minh",
              "color": "#d97706"
            },
            {
              "code": "N",
              "name": "Nga",
              "color": "#059669"
            }
          ],
          "clues": [
            "Lan (L) đứng ngay bên phải (liền kề phía Đông) Đàn Piano.",
            "Phòng Nhạc chỉ có đúng 1 người.",
            "Huy (H) ở Sảnh Chính, nhưng không đứng ở Cột A.",
            "Khánh (K) đứng ngay phía dưới (liền kề phía Nam) Kệ sách.",
            "Nga (N) đứng ngay bên trái (liền kề phía Tây) Ghế đá.",
            "Nạn nhân (V) đứng ở hàng cao hơn (số hàng nhỏ hơn) Minh (M)."
          ],
          "solution": {
            "H": [
              0,
              2
            ],
            "L": [
              1,
              5
            ],
            "V": [
              2,
              4
            ],
            "M": [
              3,
              3
            ],
            "K": [
              4,
              0
            ],
            "N": [
              5,
              1
            ]
          },
          "culprit": "M",
          "hint": "Đặt Lan, Khánh và Nga theo đồ vật trước; sau đó dùng điều kiện về hàng của nạn nhân."
        },
        {
          "id": "case-01",
          "title": "Vụ án đầu tiên của bạn",
          "label": "Hồ sơ 01",
          "size": 6,
          "rooms": {
            "living": {
              "name": "PHÒNG KHÁCH",
              "color": "#e0f7f6",
              "pattern": "checker",
              "cells": [
                [
                  0,
                  0
                ],
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ],
                [
                  1,
                  0
                ],
                [
                  1,
                  1
                ],
                [
                  1,
                  2
                ],
                [
                  2,
                  0
                ],
                [
                  2,
                  1
                ],
                [
                  2,
                  2
                ]
              ],
              "label": "L"
            },
            "master": {
              "name": "PHÒNG NGỦ CHÍNH",
              "color": "#ede9fe",
              "pattern": "planks",
              "cells": [
                [
                  0,
                  3
                ],
                [
                  0,
                  4
                ],
                [
                  0,
                  5
                ],
                [
                  1,
                  3
                ],
                [
                  1,
                  4
                ],
                [
                  1,
                  5
                ],
                [
                  2,
                  3
                ],
                [
                  2,
                  4
                ],
                [
                  2,
                  5
                ]
              ],
              "label": "N"
            },
            "hall": {
              "name": "SẢNH ĐÓN KHÁCH",
              "color": "#fce7f3",
              "pattern": "planks",
              "cells": [
                [
                  3,
                  0
                ],
                [
                  3,
                  1
                ],
                [
                  3,
                  2
                ],
                [
                  4,
                  0
                ],
                [
                  4,
                  1
                ],
                [
                  4,
                  2
                ],
                [
                  5,
                  0
                ],
                [
                  5,
                  1
                ],
                [
                  5,
                  2
                ]
              ],
              "label": "S"
            },
            "dining": {
              "name": "PHÒNG ĂN",
              "color": "#dcfce7",
              "pattern": "diamond",
              "cells": [
                [
                  3,
                  3
                ],
                [
                  3,
                  4
                ],
                [
                  3,
                  5
                ],
                [
                  4,
                  3
                ],
                [
                  4,
                  4
                ],
                [
                  4,
                  5
                ],
                [
                  5,
                  3
                ],
                [
                  5,
                  4
                ],
                [
                  5,
                  5
                ]
              ],
              "label": "A"
            }
          },
          "windows": [
            {
              "r": 0,
              "c": 1,
              "side": "top"
            },
            {
              "r": 0,
              "c": 4,
              "side": "top"
            }
          ],
          "furniture": [
            {
              "type": "rug",
              "cells": [
                [
                  1,
                  2
                ]
              ],
              "occupiable": true,
              "name": "Thảm"
            },
            {
              "type": "bed",
              "orientation": "vertical",
              "cells": [
                [
                  1,
                  4
                ],
                [
                  2,
                  4
                ]
              ],
              "occupiable": true,
              "name": "Giường"
            },
            {
              "type": "table",
              "cells": [
                [
                  3,
                  0
                ]
              ],
              "occupiable": false,
              "name": "Bàn"
            },
            {
              "type": "table",
              "cells": [
                [
                  5,
                  0
                ]
              ],
              "occupiable": false,
              "name": "Bàn"
            },
            {
              "type": "plant",
              "cells": [
                [
                  4,
                  2
                ]
              ],
              "occupiable": false,
              "name": "Cây cảnh"
            },
            {
              "type": "table",
              "cells": [
                [
                  3,
                  5
                ]
              ],
              "occupiable": false,
              "name": "Bàn"
            },
            {
              "type": "plant",
              "cells": [
                [
                  4,
                  5
                ]
              ],
              "occupiable": false,
              "name": "Cây cảnh"
            }
          ],
          "people": [
            {
              "code": "A",
              "name": "Axel",
              "isVictim": false,
              "color": "#9a3412"
            },
            {
              "code": "B",
              "name": "Bella",
              "isVictim": false,
              "color": "#15803d"
            },
            {
              "code": "C",
              "name": "Cora",
              "isVictim": false,
              "color": "#0f766e"
            },
            {
              "code": "D",
              "name": "Douglas",
              "isVictim": false,
              "color": "#1d4ed8"
            },
            {
              "code": "E",
              "name": "Ella",
              "isVictim": false,
              "color": "#6d28d9"
            },
            {
              "code": "V",
              "name": "Vincent",
              "isVictim": true,
              "color": "#b91c1c"
            }
          ],
          "clues": [
            "Axel ở ô ngay trước một cửa sổ.",
            "Bella ở sảnh đón khách.",
            "Cora đứng trên thảm.",
            "Douglas ở trên giường.",
            "Ella đứng cạnh một chậu cây trong cùng phòng.",
            "Vincent là nạn nhân, ở ô hợp lệ cuối cùng."
          ],
          "solution": {
            "A": [
              0,
              1
            ],
            "B": [
              4,
              0
            ],
            "C": [
              1,
              2
            ],
            "D": [
              2,
              4
            ],
            "E": [
              5,
              5
            ],
            "V": [
              3,
              3
            ]
          },
          "culprit": "E",
          "hint": "Thử đặt Cora lên thảm, rồi xem Douglas còn ô giường nào."
        },
        {
          "id": "case-02",
          "title": "Chỗ ở kỳ nghỉ",
          "label": "Hồ sơ 02",
          "size": 6,
          "rooms": {
            "master": {
              "name": "PHÒNG NGỦ CHÍNH",
              "color": "#e0f2fe",
              "pattern": "planks",
              "cells": [
                [
                  0,
                  0
                ],
                [
                  0,
                  1
                ],
                [
                  1,
                  0
                ],
                [
                  1,
                  1
                ],
                [
                  2,
                  0
                ],
                [
                  2,
                  1
                ],
                [
                  3,
                  0
                ],
                [
                  3,
                  1
                ]
              ],
              "label": "N"
            },
            "bath": {
              "name": "NHÀ TẮM",
              "color": "#e0f7fa",
              "pattern": "diamond",
              "cells": [
                [
                  0,
                  2
                ],
                [
                  0,
                  3
                ],
                [
                  1,
                  2
                ],
                [
                  1,
                  3
                ],
                [
                  2,
                  2
                ],
                [
                  2,
                  3
                ],
                [
                  3,
                  2
                ],
                [
                  3,
                  3
                ]
              ],
              "label": "S"
            },
            "guest": {
              "name": "PHÒNG KHÁCH (PHỤ)",
              "color": "#f0fdf4",
              "pattern": "planks",
              "cells": [
                [
                  0,
                  4
                ],
                [
                  0,
                  5
                ],
                [
                  1,
                  4
                ],
                [
                  1,
                  5
                ],
                [
                  2,
                  4
                ],
                [
                  2,
                  5
                ],
                [
                  3,
                  4
                ],
                [
                  3,
                  5
                ]
              ],
              "label": "P"
            },
            "living": {
              "name": "PHÒNG KHÁCH",
              "color": "#ecfdf5",
              "pattern": "checker",
              "cells": [
                [
                  4,
                  0
                ],
                [
                  4,
                  1
                ],
                [
                  4,
                  2
                ],
                [
                  4,
                  3
                ],
                [
                  4,
                  4
                ],
                [
                  4,
                  5
                ],
                [
                  5,
                  0
                ],
                [
                  5,
                  1
                ],
                [
                  5,
                  2
                ],
                [
                  5,
                  3
                ],
                [
                  5,
                  4
                ],
                [
                  5,
                  5
                ]
              ],
              "label": "K"
            }
          },
          "windows": [],
          "furniture": [
            {
              "type": "chair",
              "cells": [
                [
                  1,
                  0
                ]
              ],
              "occupiable": true,
              "name": "Ghế"
            },
            {
              "type": "bed",
              "orientation": "horizontal",
              "cells": [
                [
                  2,
                  0
                ],
                [
                  2,
                  1
                ]
              ],
              "occupiable": true,
              "name": "Giường"
            },
            {
              "type": "table",
              "cells": [
                [
                  0,
                  2
                ]
              ],
              "occupiable": false,
              "name": "Bàn"
            },
            {
              "type": "tv",
              "cells": [
                [
                  0,
                  4
                ]
              ],
              "occupiable": false,
              "name": "Tivi"
            },
            {
              "type": "plant",
              "cells": [
                [
                  1,
                  5
                ]
              ],
              "occupiable": false,
              "name": "Cây cảnh"
            },
            {
              "type": "bed",
              "orientation": "horizontal",
              "cells": [
                [
                  2,
                  4
                ],
                [
                  2,
                  5
                ]
              ],
              "occupiable": true,
              "name": "Giường"
            },
            {
              "type": "plant",
              "cells": [
                [
                  4,
                  0
                ]
              ],
              "occupiable": false,
              "name": "Cây cảnh"
            },
            {
              "type": "tv",
              "cells": [
                [
                  5,
                  0
                ]
              ],
              "occupiable": false,
              "name": "Tivi"
            },
            {
              "type": "table",
              "cells": [
                [
                  5,
                  3
                ]
              ],
              "occupiable": false,
              "name": "Bàn"
            }
          ],
          "people": [
            {
              "code": "A",
              "name": "Arianna",
              "isVictim": false,
              "color": "#9a3412"
            },
            {
              "code": "B",
              "name": "Brycen",
              "isVictim": false,
              "color": "#15803d"
            },
            {
              "code": "C",
              "name": "Colleen",
              "isVictim": false,
              "color": "#0f766e"
            },
            {
              "code": "D",
              "name": "Dan",
              "isVictim": false,
              "color": "#1d4ed8"
            },
            {
              "code": "E",
              "name": "Evan",
              "isVictim": false,
              "color": "#6d28d9"
            },
            {
              "code": "V",
              "name": "Virgil",
              "isVictim": true,
              "color": "#b91c1c"
            }
          ],
          "clues": [
            "Arianna đứng cạnh một tivi.",
            "Brycen ngồi trên ghế.",
            "Colleen ở nhà tắm.",
            "Dan ở trên giường, cạnh một chậu cây.",
            "Evan ở cạnh một chiếc giường.",
            "Virgil là nạn nhân, ở ô hợp lệ cuối cùng."
          ],
          "solution": {
            "A": [
              5,
              1
            ],
            "B": [
              1,
              0
            ],
            "C": [
              0,
              3
            ],
            "D": [
              2,
              5
            ],
            "E": [
              3,
              4
            ],
            "V": [
              4,
              2
            ]
          },
          "culprit": "A",
          "hint": "Đặt Brycen trên ghế; tìm ô giường nằm cạnh chậu cây."
        }
      ]
    }
  ],
  "icons": {
    "rug": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n              <rect x=\"6\" y=\"6\" width=\"88\" height=\"88\" rx=\"4\" fill=\"#bae6fd\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n              <rect x=\"16\" y=\"16\" width=\"68\" height=\"68\" rx=\"2\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/>\n            </svg>",
    "chair": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n              \n              <path d=\"M20 34 C20 14, 80 14, 80 34 L80 48 L20 48 Z\" fill=\"#fef3c7\" stroke=\"#1e293b\" stroke-width=\"4\" stroke-linejoin=\"round\"/>\n              \n              <rect x=\"24\" y=\"42\" width=\"52\" height=\"40\" rx=\"8\" fill=\"#fde68a\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n              \n              <rect x=\"12\" y=\"38\" width=\"14\" height=\"46\" rx=\"6\" fill=\"#fef9c3\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n              <rect x=\"74\" y=\"38\" width=\"14\" height=\"46\" rx=\"6\" fill=\"#fef9c3\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n            </svg>",
    "bedV0": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n                  <rect x=\"14\" y=\"8\" width=\"72\" height=\"92\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n                  <rect x=\"16\" y=\"92\" width=\"68\" height=\"10\" fill=\"#f8fafc\"/>\n                  <rect x=\"22\" y=\"16\" width=\"56\" height=\"34\" rx=\"8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"3\"/>\n                  <line x1=\"14\" y1=\"68\" x2=\"86\" y2=\"68\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>\n                  <rect x=\"16\" y=\"70\" width=\"68\" height=\"30\" fill=\"#cbd5e1\" fill-opacity=\"0.55\"/>\n                </svg>",
    "bedV1": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n                <rect x=\"14\" y=\"0\" width=\"72\" height=\"92\" rx=\"6\" fill=\"#e2e8f0\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n                <rect x=\"16\" y=\"-4\" width=\"68\" height=\"10\" fill=\"#e2e8f0\"/>\n                <rect x=\"16\" y=\"0\" width=\"68\" height=\"82\" fill=\"#c7d2fe\" fill-opacity=\"0.72\"/>\n                <line x1=\"14\" y1=\"82\" x2=\"86\" y2=\"82\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>\n              </svg>",
    "bedH0": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n                  <rect x=\"8\" y=\"14\" width=\"92\" height=\"72\" rx=\"8\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n                  <rect x=\"92\" y=\"16\" width=\"10\" height=\"68\" fill=\"#f8fafc\"/>\n                  <rect x=\"16\" y=\"22\" width=\"34\" height=\"56\" rx=\"8\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"3\"/>\n                  <line x1=\"68\" y1=\"14\" x2=\"68\" y2=\"86\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>\n                  <rect x=\"70\" y=\"16\" width=\"30\" height=\"68\" fill=\"#bbf7d0\" fill-opacity=\"0.7\"/>\n                </svg>",
    "bedH1": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\">\n                <rect x=\"0\" y=\"14\" width=\"92\" height=\"72\" rx=\"6\" fill=\"#bbf7d0\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n                <rect x=\"-4\" y=\"16\" width=\"10\" height=\"68\" fill=\"#bbf7d0\"/>\n                <line x1=\"82\" y1=\"14\" x2=\"82\" y2=\"86\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>\n              </svg>",
    "table": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n              \n              <rect x=\"16\" y=\"72\" width=\"10\" height=\"18\" rx=\"2\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n              <rect x=\"74\" y=\"72\" width=\"10\" height=\"18\" rx=\"2\" fill=\"#475569\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n              \n              <rect x=\"10\" y=\"12\" width=\"80\" height=\"64\" rx=\"6\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n              <rect x=\"16\" y=\"18\" width=\"68\" height=\"46\" rx=\"3\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n              <rect x=\"10\" y=\"68\" width=\"80\" height=\"10\" rx=\"2\" fill=\"#94a3b8\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n            </svg>",
    "plant": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n              \n              <ellipse cx=\"50\" cy=\"84\" rx=\"26\" ry=\"8\" fill=\"rgba(15,23,42,0.16)\"/>\n              \n              <path d=\"M30 58 L70 58 L64 83 C63 87, 37 87, 36 83 Z\" fill=\"#60a5fa\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>\n              <ellipse cx=\"50\" cy=\"58\" rx=\"21\" ry=\"6\" fill=\"#93c5fd\" stroke=\"#1e293b\" stroke-width=\"3.5\"/>\n              \n              <path d=\"M50 56 C38 38, 18 38, 14 26 C26 24, 40 32, 48 48 Z\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n              <path d=\"M50 56 C62 38, 82 38, 86 26 C74 24, 60 32, 52 48 Z\" fill=\"#15803d\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n              <path d=\"M50 56 C36 32, 30 16, 36 10 C45 18, 49 32, 50 50 Z\" fill=\"#22c55e\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n              <path d=\"M50 56 C64 32, 70 16, 64 10 C55 18, 51 32, 50 50 Z\" fill=\"#4ade80\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n              <path d=\"M50 56 C46 34, 46 20, 50 12 C54 20, 54 34, 50 56 Z\" fill=\"#16a34a\" stroke=\"#1e293b\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n            </svg>",
    "tv": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n              \n              <rect x=\"10\" y=\"64\" width=\"80\" height=\"24\" rx=\"5\" fill=\"#64748b\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n              <line x1=\"18\" y1=\"76\" x2=\"82\" y2=\"76\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>\n              \n              <rect x=\"16\" y=\"14\" width=\"68\" height=\"52\" rx=\"7\" fill=\"#334155\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n              <rect x=\"23\" y=\"21\" width=\"54\" height=\"38\" rx=\"4\" fill=\"#f8fafc\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>\n              \n              <text x=\"50\" y=\"48\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"800\" fill=\"#0f172a\">♪</text>\n            </svg>",
    "block": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n              <rect x=\"14\" y=\"14\" width=\"72\" height=\"72\" rx=\"10\" fill=\"#cbd5e1\" stroke=\"#1e293b\" stroke-width=\"4\"/>\n            </svg>",
    "shelf": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><rect x=\"11\" y=\"13\" width=\"78\" height=\"74\" rx=\"7\" fill=\"#b98965\" stroke=\"#24394d\" stroke-width=\"4\"/><path d=\"M17 62h66M28 23v35m15-37v37m15-30v30m16-34v34\" stroke=\"#fdf4db\" stroke-width=\"7\"/></svg>",
    "lab": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M36 12h28M43 12v30L20 78q-5 11 9 11h42q14 0 9-11L57 42V12\" fill=\"#d1fae5\" stroke=\"#254554\" stroke-width=\"5\" stroke-linejoin=\"round\"/><path d=\"M31 66h38\" stroke=\"#14b8a6\" stroke-width=\"7\"/></svg>",
    "board": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><rect x=\"12\" y=\"18\" width=\"76\" height=\"58\" rx=\"4\" fill=\"#315a52\" stroke=\"#88644a\" stroke-width=\"6\"/><path d=\"M24 62l22-19 15 14 15-20\" fill=\"none\" stroke=\"#f8fafc\" stroke-width=\"4\"/></svg>",
    "piano": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><rect x=\"7\" y=\"19\" width=\"86\" height=\"65\" rx=\"7\" fill=\"#334155\"/><path d=\"M17 43h66v30H17z\" fill=\"#fff\"/><path d=\"M30 44v29m13-29v29m14-29v29m13-29v29\" stroke=\"#334155\" stroke-width=\"3\"/></svg>",
    "fountain": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><ellipse cx=\"50\" cy=\"68\" rx=\"42\" ry=\"20\" fill=\"#bae6fd\" stroke=\"#23547d\" stroke-width=\"5\"/><path d=\"M50 66V20m0 15q-20-20-29 9m29-9q20-20 29 9\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"5\" stroke-linecap=\"round\"/></svg>",
    "bell": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path d=\"M15 72q0-32 35-38 35 6 35 38Z\" fill=\"#facc78\" stroke=\"#824b20\" stroke-width=\"5\"/><path d=\"M12 76h76M50 32V21\" stroke=\"#824b20\" stroke-width=\"6\" stroke-linecap=\"round\"/></svg>"
  }
};
