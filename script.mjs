import {
    t as e
} from "./rolldown-runtime.Dh6celcD.mjs";
import {
    A as t,
    C as n,
    D as r,
    I as i,
    L as a,
    M as o,
    N as s,
    P as c,
    R as l,
    _ as u,
    a as d,
    c as f,
    g as p,
    h as m,
    i as h,
    j as g,
    k as _,
    l as v,
    m as ee,
    n as y,
    o as b,
    p as te,
    r as ne,
    t as x,
    u as S,
    v as re,
    x as C
} from "./react.D20wc1Tc.mjs";
import {
    C as w,
    a as T,
    r as E,
    t as D
} from "./motion.5zF0Rmu1.mjs";
import {
    $ as ie,
    A as O,
    C as k,
    Ct as A,
    D as j,
    E as M,
    G as N,
    J as ae,
    K as P,
    M as oe,
    Q as se,
    R as ce,
    S as le,
    St as ue,
    T as F,
    U as de,
    W as fe,
    X as pe,
    _ as me,
    _t as he,
    a as ge,
    at as _e,
    ct as ve,
    d as ye,
    g as be,
    i as I,
    j as xe,
    m as L,
    mt as Se,
    nt as Ce,
    o as R,
    ot as we,
    p as Te,
    rt as Ee,
    s as De,
    st as Oe,
    tt as ke,
    u as Ae,
    ut as z,
    vt as je,
    wt as Me,
    x as Ne,
    xt as Pe,
    y as Fe,
    z as B
} from "./framer.CgsQoGw2.mjs";
import {
    i as Ie,
    n as Le,
    r as Re,
    t as ze
} from "./Ddls8MCno.B2GsCDq0.mjs";
import {
    i as Be,
    n as Ve,
    r as He,
    t as Ue
} from "./mK5fFGX0m.C1LTOaZU.mjs";
import {
    i as We,
    n as Ge,
    r as Ke,
    t as qe
} from "./oITY0R6Nw.C32iReJQ.mjs";
import {
    i as Je,
    n as Ye,
    r as Xe,
    t as Ze
} from "./ro7OPezbn.D7IMht-X.mjs";
import {
    i as Qe,
    n as $e,
    r as et,
    t as tt
} from "./W7giJXWzg.DTXCQIB0.mjs";
var nt, rt, it, at = e((() => {
    N(), xe.loadFonts([]), nt = [{
        explicitInter: !0,
        fonts: []
    }], rt = [`.framer-qAyvI .framer-styles-preset-1an8ucn:not(.rich-text-wrapper), .framer-qAyvI .framer-styles-preset-1an8ucn.rich-text-wrapper a { --framer-link-current-text-color: var(--token-3d779ca5-24a2-4038-90f6-dd60f0327c63, #505050) /* {"name":"Secondary"} */; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-ede354f3-e623-4c7b-982a-2c1622e8de1f, #1c0582) /* {"name":"Primary"} */; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-3d779ca5-24a2-4038-90f6-dd60f0327c63, #505050); --framer-link-text-decoration: none; }`], it = `framer-qAyvI`
}));

function ot(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var st, ct, lt, ut, dt, ft, pt, mt, ht, V, gt = e((() => {
    b(), N(), D(), n(), Ie(), Be(), We(), at(), Je(), Qe(), st = [`pM4CMiuq3`, `KNPqYtkoS`, `XS5AQX_UX`], ct = `framer-Nt0vf`, lt = {
        KNPqYtkoS: `framer-v-qp6ad7`,
        pM4CMiuq3: `framer-v-1sjc7ye`,
        XS5AQX_UX: `framer-v-777369`
    }, ut = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    }, dt = ({
        value: e,
        children: n
    }) => {
        let r = _(T),
            i = e ?? r.transition,
            a = t(() => ({
                ...r,
                transition: i
            }), [JSON.stringify(i)]);
        return f(T.Provider, {
            value: a,
            children: n
        })
    }, ft = {
        Desktop: `pM4CMiuq3`,
        Mobile: `XS5AQX_UX`,
        Tablet: `KNPqYtkoS`
    }, pt = w.create(s), mt = ({
        height: e,
        id: t,
        width: n,
        ...r
    }) => ({
        ...r,
        variant: ft[r.variant] ?? r.variant ?? `pM4CMiuq3`
    }), ht = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), V = je(p(function(e, t) {
        let n = r(null),
            i = t ?? n,
            a = re(),
            {
                activeLocale: o,
                setLocale: c
            } = z();
        Ee();
        let {
            style: l,
            className: u,
            layoutId: d,
            variant: p,
            ...m
        } = mt(e), {
            baseVariant: h,
            classNames: g,
            clearLoadingGesture: _,
            gestureHandlers: ee,
            gestureVariant: y,
            isLoading: b,
            setGestureState: te,
            setVariant: ne,
            variants: x
        } = he({
            cycleOrder: st,
            defaultVariant: `pM4CMiuq3`,
            ref: i,
            variant: p,
            variantClassNames: lt
        }), S = ht(e, x), C = O(ct, ze, Ue, Ze, tt, qe, it);
        return f(E, {
            id: d ?? a,
            children: f(pt, {
                animate: x,
                initial: !1,
                children: f(dt, {
                    value: ut,
                    children: v(w.div, {
                        ...m,
                        ...ee,
                        className: O(C, `framer-1sjc7ye`, u, g),
                        "data-framer-name": `Desktop`,
                        layoutDependency: S,
                        layoutId: `pM4CMiuq3`,
                        ref: i,
                        style: {
                            backgroundColor: `rgb(255, 255, 255)`,
                            borderTopLeftRadius: 64,
                            borderTopRightRadius: 64,
                            ...l
                        },
                        ...ot({
                            KNPqYtkoS: {
                                "data-framer-name": `Tablet`
                            },
                            XS5AQX_UX: {
                                "data-framer-name": `Mobile`
                            }
                        }, h, y),
                        children: [v(w.div, {
                            className: `framer-1nd5jfn`,
                            "data-framer-name": `Footer`,
                            layoutDependency: S,
                            layoutId: `vjnqLqLY9`,
                            style: {
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0
                            },
                            variants: {
                                XS5AQX_UX: {
                                    borderBottomLeftRadius: 24,
                                    borderBottomRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24
                                }
                            },
                            children: [f(w.div, {
                                className: `framer-ium19i`,
                                "data-framer-name": `Form & Text`,
                                layoutDependency: S,
                                layoutId: `FKe3tqkZl`,
                                children: v(w.div, {
                                    className: `framer-1o8nkro`,
                                    "data-framer-name": `Title`,
                                    layoutDependency: S,
                                    layoutId: `BVdv4sksL`,
                                    children: [f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: f(w.h2, {
                                                className: `framer-styles-preset-1hut35q`,
                                                "data-styles-preset": `Ddls8MCno`,
                                                dir: `auto`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-1of0zx5, var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11)))`
                                                },
                                                children: `Letâ€™s start your next project together.`
                                            })
                                        }),
                                        className: `framer-7cw5jb`,
                                        "data-framer-name": `Subscribe our newsletter`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `W1qL6YlGb`,
                                        style: {
                                            "--extracted-1of0zx5": `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                            "--framer-paragraph-spacing": `0px`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: f(w.h4, {
                                                className: `framer-styles-preset-s41k4v`,
                                                "data-styles-preset": `mK5fFGX0m`,
                                                dir: `auto`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-3d779ca5-24a2-4038-90f6-dd60f0327c63, rgb(80, 80, 80)))`
                                                },
                                                children: `I'm currently open to new opportunities â€“ whether it's freelance work, collaborations, or full-time roles. If you think we'd be a good fit, feel free to reach out! ðŸ¤—`
                                            })
                                        }),
                                        className: `framer-rebd80`,
                                        "data-framer-name": `Subscribe our newsletter`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `GIlSkJyA0`,
                                        style: {
                                            "--extracted-1eung3n": `var(--token-3d779ca5-24a2-4038-90f6-dd60f0327c63, rgb(80, 80, 80))`,
                                            "--framer-paragraph-spacing": `0px`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: v(w.h4, {
                                                className: `framer-styles-preset-s41k4v`,
                                                "data-styles-preset": `mK5fFGX0m`,
                                                dir: `auto`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-3d779ca5-24a2-4038-90f6-dd60f0327c63, rgb(80, 80, 80)))`
                                                },
                                                children: [`Email: `, f(L, {
                                                    href: `mailto:guylainebernardez@gmail.com`,
                                                    motionChild: !0,
                                                    nodeId: `Srjvpcutx`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `b0F693AiO`,
                                                    smoothScroll: !1,
                                                    children: f(w.a, {
                                                        className: `framer-styles-preset-1wicq5s`,
                                                        "data-styles-preset": `ro7OPezbn`,
                                                        children: `guylainebernardez@gmail.com`
                                                    })
                                                })]
                                            })
                                        }),
                                        className: `framer-1fo4amj`,
                                        "data-framer-name": `Subscribe our newsletter`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `Srjvpcutx`,
                                        style: {
                                            "--extracted-1eung3n": `var(--token-3d779ca5-24a2-4038-90f6-dd60f0327c63, rgb(80, 80, 80))`,
                                            "--framer-paragraph-spacing": `0px`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })]
                                })
                            }), f(w.div, {
                                className: `framer-18icoju`,
                                layoutDependency: S,
                                layoutId: `tlnE0A0L5`,
                                style: {
                                    backgroundColor: `var(--token-394b655e-eb71-48d0-ad1f-647e45a4f590, rgb(245, 247, 255))`
                                }
                            }), v(w.div, {
                                className: `framer-ia04d3`,
                                "data-framer-name": `Widget`,
                                layoutDependency: S,
                                layoutId: `VplREcSzG`,
                                children: [v(w.div, {
                                    className: `framer-1qb4xik`,
                                    "data-framer-name": `Navigation`,
                                    layoutDependency: S,
                                    layoutId: `pTUlUOHts`,
                                    children: [f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: f(w.p, {
                                                className: `framer-styles-preset-rg4a3r`,
                                                "data-styles-preset": `W7giJXWzg`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11)))`
                                                },
                                                children: `Navigation`
                                            })
                                        }),
                                        className: `framer-5mnuev`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `yinxN4yC5`,
                                        style: {
                                            "--extracted-r6o4lv": `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), v(w.div, {
                                        className: `framer-1ogbj0g`,
                                        layoutDependency: S,
                                        layoutId: `ylhPDyVSj`,
                                        children: [f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            hash: `:YerGlzDW8`,
                                                            webPageId: `pcbCIMA_J`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `VEHSCaGdf`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !1,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `Home`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-1oawfcq`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `VEHSCaGdf`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            hash: `:hRRaLV6ls`,
                                                            webPageId: `pcbCIMA_J`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `jJNnop7Zz`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !0,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `Projects`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-fv9sr`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `jJNnop7Zz`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            webPageId: `LgT9AzZjO`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `Q2xn3s1jn`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !0,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `Graphic Design`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-1u9y84l`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `Q2xn3s1jn`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            webPageId: `pbCtkyl7Z`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `m4iuzIUR5`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !0,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `About`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-s6s1d`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `m4iuzIUR5`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            hash: `:GFVgBie_i`,
                                                            webPageId: `pcbCIMA_J`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `UhlP2_lwY`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !0,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `ResumÃ©`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-yfho56`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `UhlP2_lwY`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: `mailto:guylainebernardez@gmail.com`,
                                                        motionChild: !0,
                                                        nodeId: `PIlR8aLmY`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !0,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `Contact`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-1hlb5u4`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `PIlR8aLmY`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })]
                                    })]
                                }), v(w.div, {
                                    className: `framer-1tkm016`,
                                    "data-framer-name": `Navigation`,
                                    layoutDependency: S,
                                    layoutId: `r_jkq8r9m`,
                                    children: [f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: f(w.p, {
                                                className: `framer-styles-preset-rg4a3r`,
                                                "data-styles-preset": `W7giJXWzg`,
                                                style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11)))`
                                                },
                                                children: `Case studies`
                                            })
                                        }),
                                        className: `framer-18lfn38`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `ke5vzDXds`,
                                        style: {
                                            "--extracted-r6o4lv": `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), v(w.div, {
                                        className: `framer-pj2r00`,
                                        layoutDependency: S,
                                        layoutId: `eGZIeLL4O`,
                                        children: [f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            webPageId: `jBz2CS1eD`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `JQ5MQ5wKx`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !1,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `Pawmily`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-hle1jn`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `JQ5MQ5wKx`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            webPageId: `CjcNZbbcQ`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `VeWruJm_G`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !1,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `Ricci`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-72ctt2`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `VeWruJm_G`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            webPageId: `Emr32Cd7E`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `RAZxWul1n`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !1,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `Chime`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-1d0bel7`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `RAZxWul1n`,
                                            style: {
                                                "--extracted-r6o4lv": `rgb(255, 255, 255)`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        }), f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    className: `framer-styles-preset-hu60r5`,
                                                    "data-styles-preset": `oITY0R6Nw`,
                                                    dir: `auto`,
                                                    style: {
                                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11)))`
                                                    },
                                                    children: f(L, {
                                                        href: {
                                                            webPageId: `NeyJtYrsH`
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `r5GufeSFf`,
                                                        openInNewTab: !1,
                                                        relValues: [],
                                                        scopeId: `b0F693AiO`,
                                                        smoothScroll: !1,
                                                        children: f(w.a, {
                                                            className: `framer-styles-preset-1an8ucn`,
                                                            "data-styles-preset": `qzXN_wNE7`,
                                                            children: `FreshBox`
                                                        })
                                                    })
                                                })
                                            }),
                                            className: `framer-omt7d2`,
                                            fonts: [`Inter`],
                                            layoutDependency: S,
                                            layoutId: `r5GufeSFf`,
                                            style: {
                                                "--extracted-r6o4lv": `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                        })]
                                    })]
                                })]
                            })]
                        }), f(w.div, {
                            className: `framer-kb72qh`,
                            "data-framer-name": `Content`,
                            layoutDependency: S,
                            layoutId: `eVdbYHZzS`,
                            children: v(w.div, {
                                className: `framer-lx78wp`,
                                "data-framer-name": `Text Content`,
                                layoutDependency: S,
                                layoutId: `cMcYq7AtI`,
                                children: [f(k, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                        children: f(w.p, {
                                            dir: `auto`,
                                            style: {
                                                "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                                "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                "--framer-font-size": `14px`,
                                                "--framer-font-weight": `500`,
                                                "--framer-letter-spacing": `0px`,
                                                "--framer-line-height": `140%`,
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11)))`
                                            },
                                            children: f(L, {
                                                href: `twitter.com/tonjrv`,
                                                motionChild: !0,
                                                nodeId: `wTSuXkp3l`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `b0F693AiO`,
                                                smoothScroll: !1,
                                                children: f(w.a, {
                                                    className: `framer-styles-preset-10lfzjg`,
                                                    "data-styles-preset": `ZGUUpaJA6`,
                                                    children: `Â© 2026 â€” Guylaine Bernardez `
                                                })
                                            })
                                        })
                                    }),
                                    className: `framer-nha0n4`,
                                    "data-framer-name": `Copyright @2024`,
                                    fonts: [`FS;Satoshi-medium`],
                                    layoutDependency: S,
                                    layoutId: `wTSuXkp3l`,
                                    style: {
                                        "--extracted-r6o4lv": `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                        "--framer-paragraph-spacing": `14px`
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0
                                }), v(w.div, {
                                    className: `framer-1y8nzw2`,
                                    "data-framer-name": `More Links`,
                                    layoutDependency: S,
                                    layoutId: `FoM6l_67M`,
                                    children: [f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: f(w.p, {
                                                style: {
                                                    "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                                    "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `140%`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d5e2105d-94ea-448b-b60a-a49aaeb81f81, rgb(0, 0, 0)))`
                                                },
                                                children: f(L, {
                                                    href: `https://www.framer.com/legal/privacy-statement/`,
                                                    motionChild: !0,
                                                    nodeId: `HwJqsEwXY`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `b0F693AiO`,
                                                    smoothScroll: !1,
                                                    children: f(w.a, {
                                                        className: `framer-styles-preset-10lfzjg`,
                                                        "data-styles-preset": `ZGUUpaJA6`,
                                                        children: `Privacy Policy`
                                                    })
                                                })
                                            })
                                        }),
                                        className: `framer-1bffn4m`,
                                        "data-framer-name": `Footer link`,
                                        fonts: [`FS;Satoshi-medium`],
                                        layoutDependency: S,
                                        layoutId: `HwJqsEwXY`,
                                        style: {
                                            "--extracted-r6o4lv": `var(--token-d5e2105d-94ea-448b-b60a-a49aaeb81f81, rgb(0, 0, 0))`,
                                            "--framer-paragraph-spacing": `14px`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: f(w.p, {
                                                style: {
                                                    "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                                    "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `140%`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d5e2105d-94ea-448b-b60a-a49aaeb81f81, rgb(0, 0, 0)))`
                                                },
                                                children: f(L, {
                                                    href: `https://www.framer.com/legal/cookie-policy/`,
                                                    motionChild: !0,
                                                    nodeId: `hnfQOFbvH`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `b0F693AiO`,
                                                    smoothScroll: !1,
                                                    children: f(w.a, {
                                                        className: `framer-styles-preset-10lfzjg`,
                                                        "data-styles-preset": `ZGUUpaJA6`,
                                                        children: `Cookies`
                                                    })
                                                })
                                            })
                                        }),
                                        className: `framer-88crj8`,
                                        "data-framer-name": `Footer link`,
                                        fonts: [`FS;Satoshi-medium`],
                                        layoutDependency: S,
                                        layoutId: `hnfQOFbvH`,
                                        style: {
                                            "--extracted-r6o4lv": `var(--token-d5e2105d-94ea-448b-b60a-a49aaeb81f81, rgb(0, 0, 0))`,
                                            "--framer-paragraph-spacing": `14px`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    }), f(k, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                            children: f(w.p, {
                                                style: {
                                                    "--font-selector": `RlM7U2F0b3NoaS1tZWRpdW0=`,
                                                    "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                    "--framer-font-size": `14px`,
                                                    "--framer-font-weight": `500`,
                                                    "--framer-letter-spacing": `0px`,
                                                    "--framer-line-height": `140%`,
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d5e2105d-94ea-448b-b60a-a49aaeb81f81, rgb(0, 0, 0)))`
                                                },
                                                children: f(L, {
                                                    href: `https://www.framer.com/legal/terms-of-service/`,
                                                    motionChild: !0,
                                                    nodeId: `vmxUe0oMi`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `b0F693AiO`,
                                                    smoothScroll: !1,
                                                    children: f(w.a, {
                                                        className: `framer-styles-preset-10lfzjg`,
                                                        "data-styles-preset": `ZGUUpaJA6`,
                                                        children: `Terms & Conditions`
                                                    })
                                                })
                                            })
                                        }),
                                        className: `framer-1b8h815`,
                                        "data-framer-name": `Footer link`,
                                        fonts: [`FS;Satoshi-medium`],
                                        layoutDependency: S,
                                        layoutId: `vmxUe0oMi`,
                                        style: {
                                            "--extracted-r6o4lv": `var(--token-d5e2105d-94ea-448b-b60a-a49aaeb81f81, rgb(0, 0, 0))`,
                                            "--framer-paragraph-spacing": `14px`
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0
                                    })]
                                })]
                            })
                        })]
                    })
                })
            })
        })
    }), [`.framer-Nt0vf.framer-80c2qt, .framer-Nt0vf .framer-80c2qt { display: block; }`, `.framer-Nt0vf.framer-1sjc7ye { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 40px 20px 40px; position: relative; width: 1201px; will-change: var(--framer-will-change-override, transform); }`, `.framer-Nt0vf .framer-1nd5jfn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1400px; overflow: visible; padding: 80px 40px 80px 40px; position: relative; width: 100%; }`, `.framer-Nt0vf .framer-ium19i { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`, `.framer-Nt0vf .framer-1o8nkro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`, `.framer-Nt0vf .framer-7cw5jb, .framer-Nt0vf .framer-rebd80, .framer-Nt0vf .framer-1fo4amj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 376px; word-break: break-word; word-wrap: break-word; }`, `.framer-Nt0vf .framer-18icoju { align-self: stretch; flex: none; height: auto; overflow: hidden; position: relative; width: 2px; }`, `.framer-Nt0vf .framer-ia04d3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-Nt0vf .framer-1qb4xik, .framer-Nt0vf .framer-1tkm016 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-Nt0vf .framer-5mnuev, .framer-Nt0vf .framer-18lfn38, .framer-Nt0vf .framer-nha0n4, .framer-Nt0vf .framer-1bffn4m, .framer-Nt0vf .framer-88crj8, .framer-Nt0vf .framer-1b8h815 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-Nt0vf .framer-1ogbj0g, .framer-Nt0vf .framer-pj2r00 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-Nt0vf .framer-1oawfcq, .framer-Nt0vf .framer-fv9sr, .framer-Nt0vf .framer-1u9y84l, .framer-Nt0vf .framer-s6s1d, .framer-Nt0vf .framer-yfho56, .framer-Nt0vf .framer-1hlb5u4, .framer-Nt0vf .framer-hle1jn, .framer-Nt0vf .framer-72ctt2, .framer-Nt0vf .framer-1d0bel7, .framer-Nt0vf .framer-omt7d2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-Nt0vf .framer-kb72qh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 1400px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`, `.framer-Nt0vf .framer-lx78wp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-Nt0vf .framer-1y8nzw2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`, `.framer-Nt0vf.framer-v-qp6ad7.framer-1sjc7ye { padding: 75px 40px 80px 40px; width: 768px; }`, `.framer-Nt0vf.framer-v-qp6ad7 .framer-1o8nkro, .framer-Nt0vf.framer-v-qp6ad7 .framer-7cw5jb, .framer-Nt0vf.framer-v-qp6ad7 .framer-rebd80, .framer-Nt0vf.framer-v-qp6ad7 .framer-1fo4amj, .framer-Nt0vf.framer-v-777369 .framer-1o8nkro, .framer-Nt0vf.framer-v-777369 .framer-7cw5jb, .framer-Nt0vf.framer-v-777369 .framer-rebd80, .framer-Nt0vf.framer-v-777369 .framer-1fo4amj { width: 100%; }`, `.framer-Nt0vf.framer-v-qp6ad7 .framer-ia04d3 { gap: 40px; }`, `.framer-Nt0vf.framer-v-777369.framer-1sjc7ye { gap: 40px; padding: 16px; width: 390px; }`, `.framer-Nt0vf.framer-v-777369 .framer-1nd5jfn { flex-direction: column; padding: 40px 16px 40px 16px; }`, `.framer-Nt0vf.framer-v-777369 .framer-ium19i, .framer-Nt0vf.framer-v-777369 .framer-1qb4xik, .framer-Nt0vf.framer-v-777369 .framer-1tkm016 { flex: none; width: 100%; }`, `.framer-Nt0vf.framer-v-777369 .framer-18icoju { align-self: unset; height: 2px; width: 100%; }`, `.framer-Nt0vf.framer-v-777369 .framer-ia04d3 { align-content: center; align-items: center; flex: none; flex-direction: column; gap: 40px; width: 100%; }`, `.framer-Nt0vf.framer-v-777369 .framer-5mnuev { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-Nt0vf.framer-v-777369 .framer-lx78wp { align-content: center; align-items: center; flex-direction: column; }`, ...Le, ...Ve, ...Ye, ...$e, ...Ge, ...rt], `framer-Nt0vf`), V.displayName = `Elements/ Footer`, V.defaultProps = {
        height: 543,
        width: 1201
    }, j(V, {
        variant: {
            options: [`pM4CMiuq3`, `KNPqYtkoS`, `XS5AQX_UX`],
            optionTitles: [`Desktop`, `Tablet`, `Mobile`],
            title: `Variant`,
            type: R.Enum
        }
    }), M(V, [{
        explicitInter: !0,
        fonts: [{
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
            url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
            url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+1F00-1FFF`,
            url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0370-03FF`,
            url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
            url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
            url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Inter`,
            source: `framer`,
            style: `normal`,
            uiFamilyName: `Inter`,
            unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
            url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
            weight: `400`
        }, {
            cssFamilyName: `Satoshi`,
            source: `fontshare`,
            style: `normal`,
            uiFamilyName: `Satoshi`,
            url: `https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2`,
            weight: `500`
        }]
    }, ...B(Re), ...B(He), ...B(Xe), ...B(et), ...B(Ke), ...B(nt)], {
        supportsExplicitInterCodegen: !0
    })
}));

function H({
    blur: e,
    borderRadius: n,
    direction: r,
    transition: i
}) {
    return f(`div`, {
        style: {
            position: `absolute`,
            inset: 0,
            overflow: `hidden`
        },
        children: t(() => [{
            blur: `${e/2/2/2/2/2/2/2}px`,
            gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`
        }, {
            blur: `${e/2/2/2/2/2/2}px`,
            gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`
        }, {
            blur: `${e/2/2/2/2/2}px`,
            gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`
        }, {
            blur: `${e/2/2/2/2}px`,
            gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`
        }, {
            blur: `${e/2/2/2}px`,
            gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`
        }, {
            blur: `${e/2/2}px`,
            gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`
        }, {
            blur: `${e/2}px`,
            gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`
        }, {
            blur: `${e}px`,
            gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%`
        }], [e]).map((e, t) => f(w.div, {
            transition: i,
            initial: {
                backdropFilter: `blur(${e.blur})`
            },
            animate: {
                backdropFilter: `blur(${e.blur})`
            },
            style: {
                opacity: 1,
                position: `absolute`,
                inset: 0,
                zIndex: t + 1,
                maskImage: `linear-gradient(${r}, ${e.gradient})`,
                WebkitMaskImage: `linear-gradient(${r}, ${e.gradient})`,
                borderRadius: n,
                pointerEvents: `none`
            }
        }, t))
    })
}
var _t = e((() => {
    b(), n(), D(), N(), H.defaultProps = {
        blur: 10,
        borderRadius: `0px`,
        direction: `toBottom`,
        transition: {
            duration: .3
        }
    }, j(H, {
        blur: {
            title: `Blur`,
            type: R.Number,
            defaultValue: 10,
            min: 0,
            max: 100,
            step: 1,
            description: `Large blur values (10<) can impact performance.`
        },
        borderRadius: {
            title: `Radius`,
            type: R.BorderRadius,
            defaultValue: `0px`,
            description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`
        },
        direction: {
            title: `Direction`,
            type: R.SegmentedEnum,
            options: [`to bottom`, `to top`, `to left`, `to right`],
            optionTitles: [`â†“`, `â†‘`, `â†`, `â†’`],
            defaultValue: `to bottom`
        },
        transition: {
            type: R.Transition,
            defaultValue: {
                duration: .3
            },
            title: `Transition`,
            description: `Control how the blur animates when used on hover states or any othe interaction.

More components at [Framer University](https://frameruni.link/cc).`
        }
    }), H.displayName = `Blur Gradient`
}));

function vt(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var yt, bt, xt, St, Ct, U, W, wt, Tt, Et, Dt, Ot, G, kt = e((() => {
    b(), N(), D(), n(), yt = {
        h7i0PH9pd: {
            hover: !0
        },
        Mj7WiE8_l: {
            hover: !0
        },
        y3db6aeJW: {
            hover: !0
        }
    }, bt = [`Mj7WiE8_l`, `h7i0PH9pd`, `oWtocxq2o`, `y3db6aeJW`], xt = `framer-qN6c5`, St = {
        h7i0PH9pd: `framer-v-1kkky32`,
        Mj7WiE8_l: `framer-v-1lvsk70`,
        oWtocxq2o: `framer-v-1tyjmcb`,
        y3db6aeJW: `framer-v-1djpc2j`
    }, Ct = {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
    }, U = (e, t) => `translate(-50%, -50%) ${t}`, W = (e, t) => `translateX(-50%) ${t}`, wt = ({
        value: e,
        children: n
    }) => {
        let r = _(T),
            i = e ?? r.transition,
            a = t(() => ({
                ...r,
                transition: i
            }), [JSON.stringify(i)]);
        return f(T.Provider, {
            value: a,
            children: n
        })
    }, Tt = w.create(s), Et = {
        DownloadButton: `y3db6aeJW`,
        NavBarButton: `h7i0PH9pd`,
        NavBarMobile: `oWtocxq2o`,
        PrimaryButton: `Mj7WiE8_l`
    }, Dt = ({
        height: e,
        id: t,
        link: n,
        tap: r,
        textColor: i,
        title: a,
        width: o,
        ...s
    }) => ({
        ...s,
        B0eTuUnrS: n ?? s.B0eTuUnrS,
        FOxcLjTdx: a ?? s.FOxcLjTdx ?? `Button`,
        jkE7sM56V: i ?? s.jkE7sM56V ?? `var(--token-a5cf463f-726a-4c54-b5ae-6b9fa053d122, rgb(255, 255, 255))`,
        QIrXjwYb4: r ?? s.QIrXjwYb4,
        variant: Et[s.variant] ?? s.variant ?? `Mj7WiE8_l`
    }), Ot = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), G = je(p(function(e, t) {
        let {
            activeLocale: n,
            setLocale: i
        } = z(), {
            style: a,
            className: o,
            layoutId: c,
            variant: l,
            FOxcLjTdx: u,
            B0eTuUnrS: d,
            QIrXjwYb4: p,
            jkE7sM56V: m,
            ...h
        } = Dt(e), {
            baseVariant: g,
            classNames: _,
            clearLoadingGesture: ee,
            gestureHandlers: y,
            gestureVariant: b,
            isLoading: te,
            setGestureState: ne,
            setVariant: x,
            variants: S
        } = he({
            cycleOrder: bt,
            defaultVariant: `Mj7WiE8_l`,
            enabledGestures: yt,
            variant: l,
            variantClassNames: St
        }), C = Ot(e, S), {
            activeVariantCallback: T,
            delay: D
        } = Ce(g), ie = T(async (...e) => {
            if (ne({
                    isPressed: !1
                }), p && await p(...e) === !1) return !1
        }), A = O(xt), j = r(null), M = () => g !== `oWtocxq2o`, N = re();
        return Ee(), f(E, {
            id: c ?? N,
            children: f(Tt, {
                animate: S,
                initial: !1,
                children: f(wt, {
                    value: Ct,
                    children: f(L, {
                        href: d,
                        motionChild: !0,
                        nodeId: `Mj7WiE8_l`,
                        openInNewTab: !1,
                        smoothScroll: !0,
                        children: v(w.a, {
                            ...h,
                            ...y,
                            className: `${O(A,`framer-1lvsk70`,o,_)} framer-mo6oak`,
                            "data-framer-name": `PrimaryButton`,
                            "data-highlight": !0,
                            layoutDependency: C,
                            layoutId: `Mj7WiE8_l`,
                            onTap: ie,
                            ref: t ?? j,
                            style: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                ...a
                            },
                            variants: {
                                "h7i0PH9pd-hover": {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                },
                                "Mj7WiE8_l-hover": {
                                    backgroundColor: `rgba(0, 0, 0, 0)`,
                                    borderBottomLeftRadius: 0,
                                    borderBottomRightRadius: 0,
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0
                                },
                                y3db6aeJW: {
                                    backgroundColor: `var(--token-ede354f3-e623-4c7b-982a-2c1622e8de1f, rgb(28, 5, 130))`,
                                    borderBottomLeftRadius: 476,
                                    borderBottomRightRadius: 476,
                                    borderTopLeftRadius: 476,
                                    borderTopRightRadius: 476
                                }
                            },
                            ...vt({
                                "h7i0PH9pd-hover": {
                                    "data-framer-name": void 0
                                },
                                "Mj7WiE8_l-hover": {
                                    "data-framer-name": void 0
                                },
                                "y3db6aeJW-hover": {
                                    "data-framer-name": void 0
                                },
                                h7i0PH9pd: {
                                    "data-framer-name": `NavBarButton`
                                },
                                oWtocxq2o: {
                                    "data-framer-name": `NavBarMobile`
                                },
                                y3db6aeJW: {
                                    "data-framer-name": `DownloadButton`
                                }
                            }, g, b),
                            children: [f(k, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                    children: f(w.p, {
                                        style: {
                                            "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                            "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-jkE7sM56V-eSz_fYvgn))`
                                        },
                                        children: f(w.strong, {
                                            children: `Button`
                                        })
                                    })
                                }),
                                className: `framer-1a1wbpo`,
                                "data-framer-name": `Title1`,
                                fonts: [`FS;Satoshi-regular`, `FS;Satoshi-bold`],
                                layoutDependency: C,
                                layoutId: `aP8plBJ3k`,
                                style: {
                                    "--extracted-r6o4lv": `var(--variable-reference-jkE7sM56V-eSz_fYvgn)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    "--framer-paragraph-spacing": `0px`,
                                    "--variable-reference-jkE7sM56V-eSz_fYvgn": m
                                },
                                text: u,
                                transformTemplate: U,
                                variants: {
                                    oWtocxq2o: {
                                        "--extracted-r6o4lv": `var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(0, 0, 0))`
                                    }
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...vt({
                                    "Mj7WiE8_l-hover": {
                                        transformTemplate: W
                                    },
                                    "y3db6aeJW-hover": {
                                        transformTemplate: W
                                    },
                                    oWtocxq2o: {
                                        children: f(s, {
                                            children: f(w.p, {
                                                style: {
                                                    "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                                    "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fe8040e6-3344-44c0-bab9-226d490ba5f3, rgb(0, 0, 0)))`
                                                },
                                                children: f(w.strong, {
                                                    children: `Button`
                                                })
                                            })
                                        }),
                                        transformTemplate: void 0
                                    }
                                }, g, b)
                            }), M() && f(k, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                    children: f(w.p, {
                                        style: {
                                            "--font-selector": `RlM7U2F0b3NoaS1yZWd1bGFy`,
                                            "--framer-font-family": `"Satoshi", "Satoshi Placeholder", sans-serif`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-jkE7sM56V-eSz_fYvgn))`
                                        },
                                        children: f(w.strong, {
                                            children: `Button`
                                        })
                                    })
                                }),
                                className: `framer-bb3y21`,
                                "data-framer-name": `Title2`,
                                fonts: [`FS;Satoshi-regular`, `FS;Satoshi-bold`],
                                layoutDependency: C,
                                layoutId: `LKu1Zn7F9`,
                                style: {
                                    "--extracted-r6o4lv": `var(--variable-reference-jkE7sM56V-eSz_fYvgn)`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                    "--framer-paragraph-spacing": `0px`,
                                    "--variable-reference-jkE7sM56V-eSz_fYvgn": m
                                },
                                text: u,
                                transformTemplate: W,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...vt({
                                    "Mj7WiE8_l-hover": {
                                        transformTemplate: U
                                    },
                                    "y3db6aeJW-hover": {
                                        transformTemplate: U
                                    }
                                }, g, b)
                            })]
                        })
                    })
                })
            })
        })
    }), [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-qN6c5.framer-mo6oak, .framer-qN6c5 .framer-mo6oak { display: block; }`, `.framer-qN6c5.framer-1lvsk70 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 100px; }`, `.framer-qN6c5 .framer-1a1wbpo { flex: none; height: auto; left: 50%; position: absolute; top: 49%; white-space: pre; width: auto; z-index: 1; }`, `.framer-qN6c5 .framer-bb3y21 { bottom: -22px; flex: none; height: auto; left: 49%; position: absolute; white-space: pre; width: auto; z-index: 1; }`, `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-qN6c5.framer-1lvsk70 { gap: 0px; } .framer-qN6c5.framer-1lvsk70 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-qN6c5.framer-1lvsk70 > :first-child { margin-top: 0px; } .framer-qN6c5.framer-1lvsk70 > :last-child { margin-bottom: 0px; } }`, `.framer-qN6c5.framer-v-1tyjmcb.framer-1lvsk70 { align-content: flex-start; align-items: flex-start; height: min-content; width: min-content; }`, `.framer-qN6c5.framer-v-1tyjmcb .framer-1a1wbpo { left: unset; position: relative; top: unset; }`, `.framer-qN6c5.framer-v-1djpc2j.framer-1lvsk70 { will-change: var(--framer-will-change-override, transform); }`, `.framer-qN6c5.framer-v-1lvsk70.hover .framer-1a1wbpo { left: 49%; top: -22px; }`, `.framer-qN6c5.framer-v-1lvsk70.hover .framer-bb3y21 { bottom: unset; top: 51%; }`, `.framer-qN6c5.framer-v-1djpc2j.hover .framer-1a1wbpo { left: 49%; top: -24px; }`, `.framer-qN6c5.framer-v-1djpc2j.hover .framer-bb3y21 { bottom: unset; left: 49%; top: 48%; }`], `framer-qN6c5`), G.displayName = `Buttons/ Navigation Bar Button`, G.defaultProps = {
        height: 40,
        width: 100
    }, j(G, {
        variant: {
            options: [`Mj7WiE8_l`, `h7i0PH9pd`, `oWtocxq2o`, `y3db6aeJW`],
            optionTitles: [`PrimaryButton`, `NavBarButton`, `NavBarMobile`, `DownloadButton`],
            title: `Variant`,
            type: R.Enum
        },
        FOxcLjTdx: {
            defaultValue: `Button`,
            displayTextArea: !1,
            title: `Title`,
            type: R.String
        },
        B0eTuUnrS: {
            title: `Link`,
            type: R.Link
        },
        QIrXjwYb4: {
            title: `Tap`,
            type: R.EventHandler
        },
        jkE7sM56V: {
            defaultValue: `var(--token-a5cf463f-726a-4c54-b5ae-6b9fa053d122, rgb(255, 255, 255)) /* {"name":"Primary"} */`,
            title: `TextColor`,
            type: R.Color
        }
    }), M(G, [{
        explicitInter: !0,
        fonts: [{
            family: `Satoshi`,
            source: `fontshare`,
            style: `normal`,
            url: `https://framerusercontent.com/third-party-assets/fontshare/wf/TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2`,
            weight: `400`
        }, {
            family: `Satoshi`,
            source: `fontshare`,
            style: `normal`,
            url: `https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2`,
            weight: `700`
        }]
    }], {
        supportsExplicitInterCodegen: !0
    })
}));

function K(e, ...t) {
    let n = {};
    return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, q, J, zt, Bt, Vt, Ht, Ut, Y, Wt = e((() => {
        b(), N(), D(), n(), _t(), kt(), At = ce(H), jt = ce(G), Mt = Pe(w.nav), Nt = [`xgiU_S6sH`, `n9pTYvk9m`, `ZSkZtxHul`], Pt = `framer-c6wfL`, Ft = {
            n9pTYvk9m: `framer-v-t9csxy`,
            xgiU_S6sH: `framer-v-wdh7i4`,
            ZSkZtxHul: `framer-v-12dtfmn`
        }, It = {
            damping: 40,
            delay: 0,
            mass: 1,
            stiffness: 400,
            type: `spring`
        }, Lt = {
            damping: 40,
            delay: 0,
            mass: 1,
            stiffness: 300,
            type: `spring`
        }, Rt = {
            opacity: 0,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: -80
        }, q = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: .98,
            skewX: 0,
            skewY: 0,
            transition: {
                damping: 30,
                delay: 0,
                mass: 1,
                stiffness: 400,
                type: `spring`
            }
        }, J = (...e) => {
            for (let t of e)
                if (t && typeof t == `string`) return t
        }, zt = ({
            value: e,
            children: n
        }) => {
            let r = _(T),
                i = e ?? r.transition,
                a = t(() => ({
                    ...r,
                    transition: i
                }), [JSON.stringify(i)]);
            return f(T.Provider, {
                value: a,
                children: n
            })
        }, Bt = {
            Desktop: `xgiU_S6sH`,
            MobileClosed: `n9pTYvk9m`,
            MobileOpen: `ZSkZtxHul`
        }, Vt = w.create(s), Ht = ({
            height: e,
            id: t,
            width: n,
            ...r
        }) => ({
            ...r,
            variant: Bt[r.variant] ?? r.variant ?? `xgiU_S6sH`
        }), Ut = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Y = je(p(function(e, t) {
            let n = r(null),
                i = t ?? n,
                a = re(),
                {
                    activeLocale: o,
                    setLocale: c
                } = z(),
                l = Ee(),
                {
                    style: u,
                    className: d,
                    layoutId: p,
                    variant: m,
                    ...h
                } = Ht(e),
                {
                    baseVariant: g,
                    classNames: _,
                    clearLoadingGesture: ee,
                    gestureHandlers: y,
                    gestureVariant: b,
                    isLoading: te,
                    setGestureState: ne,
                    setVariant: x,
                    variants: S
                } = he({
                    cycleOrder: Nt,
                    defaultVariant: `xgiU_S6sH`,
                    ref: i,
                    variant: m,
                    variantClassNames: Ft
                }),
                C = Ut(e, S),
                {
                    activeVariantCallback: T,
                    delay: D
                } = Ce(g),
                ie = T(async (...e) => {
                    x(`n9pTYvk9m`)
                }),
                A = T(async (...e) => {
                    await D(() => x(`n9pTYvk9m`), 100)
                }),
                j = T(async (...e) => {
                    x(`wOpPQVB7Y`)
                }),
                M = T(async (...e) => {
                    x(`ZSkZtxHul`)
                }),
                N = O(Pt),
                ae = () => g !== `n9pTYvk9m`;
            Se();
            let P = () => !![`n9pTYvk9m`, `ZSkZtxHul`].includes(g);
            return f(E, {
                id: p ?? a,
                children: f(Vt, {
                    animate: S,
                    initial: !1,
                    children: f(zt, {
                        value: It,
                        children: v(Mt, {
                            ...h,
                            ...y,
                            className: O(N, `framer-wdh7i4`, d, _),
                            "data-framer-name": `Desktop`,
                            layoutDependency: C,
                            layoutId: `xgiU_S6sH`,
                            ref: i,
                            style: {
                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                boxShadow: `none`,
                                ...u
                            },
                            variants: {
                                ZSkZtxHul: {
                                    backgroundColor: `var(--token-394b655e-eb71-48d0-ad1f-647e45a4f590, rgb(245, 251, 255))`,
                                    borderBottomLeftRadius: 24,
                                    borderBottomRightRadius: 24,
                                    boxShadow: `0px 0.6021873017743928px 1.083937143193907px -1px rgba(255, 255, 255, 0.15), 0px 2.288533303243457px 4.119359945838223px -2px rgba(255, 255, 255, 0.14), 0px 10px 18px -3px rgba(255, 255, 255, 0.1)`
                                }
                            },
                            ...K({
                                n9pTYvk9m: {
                                    __framer__animate: {
                                        transition: Lt
                                    },
                                    __framer__animateOnce: !1,
                                    __framer__scrollDirection: {
                                        direction: `down`,
                                        target: Rt
                                    },
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    "data-framer-name": `MobileClosed`
                                },
                                ZSkZtxHul: {
                                    "data-framer-name": `MobileOpen`
                                }
                            }, g, b),
                            children: [f(w.div, {
                                className: `framer-1gcriu9`,
                                "data-framer-name": `BGGradient`,
                                layoutDependency: C,
                                layoutId: `l4iTuKxN7`,
                                style: {
                                    background: `linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)`
                                }
                            }), f(I, {
                                children: f(F, {
                                    className: `framer-12q0bve-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    layoutDependency: C,
                                    layoutId: `qdYbvl7Rr-container`,
                                    nodeId: `qdYbvl7Rr`,
                                    rendersWithMotion: !0,
                                    scopeId: `q8f5UT_gI`,
                                    children: f(H, {
                                        blur: 5,
                                        borderRadius: `0px`,
                                        direction: `to bottom`,
                                        height: `100%`,
                                        id: `qdYbvl7Rr`,
                                        layoutId: `qdYbvl7Rr`,
                                        style: {
                                            height: `100%`,
                                            width: `100%`
                                        },
                                        transition: {
                                            delay: 0,
                                            duration: .3,
                                            ease: [.44, 0, .56, 1],
                                            type: `tween`
                                        },
                                        width: `100%`
                                    })
                                })
                            }), v(w.div, {
                                className: `framer-7all82`,
                                layoutDependency: C,
                                layoutId: `ggadjoRda`,
                                children: [f(L, {
                                    href: {
                                        webPageId: `pcbCIMA_J`
                                    },
                                    motionChild: !0,
                                    nodeId: `W4fsH35UK`,
                                    openInNewTab: !1,
                                    scopeId: `q8f5UT_gI`,
                                    children: f(w.a, {
                                        className: `framer-1e33y9k framer-ek7scr`,
                                        "data-framer-name": `Logo`,
                                        layoutDependency: C,
                                        layoutId: `W4fsH35UK`,
                                        style: {
                                            borderBottomLeftRadius: 298,
                                            borderBottomRightRadius: 298,
                                            borderTopLeftRadius: 298,
                                            borderTopRightRadius: 298
                                        },
                                        children: f(k, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                                children: f(w.p, {
                                                    dir: `auto`,
                                                    style: {
                                                        "--font-selector": `RlM7U2F0b3NoaS1ibGFjaw==`,
                                                        "--framer-font-family": `"Satoshi", sans-serif`,
                                                        "--framer-font-weight": `900`,
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11)))`,
                                                        "--framer-text-transform": `uppercase`
                                                    },
                                                    children: `Guylaine Bernardez`
                                                })
                                            }),
                                            className: `framer-y1fcml`,
                                            fonts: [`FS;Satoshi-black`],
                                            layoutDependency: C,
                                            layoutId: `met2CoGuC`,
                                            style: {
                                                "--extracted-r6o4lv": `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                "--framer-link-text-decoration": `underline`
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                            ...K({
                                                n9pTYvk9m: {
                                                    "data-highlight": !0,
                                                    onTap: ie
                                                }
                                            }, g, b)
                                        })
                                    })
                                }), ae() && v(w.div, {
                                    className: `framer-1erpkp9`,
                                    "data-framer-name": `Links`,
                                    layoutDependency: C,
                                    layoutId: `CGLniMcZW`,
                                    style: {
                                        borderBottomLeftRadius: 381,
                                        borderBottomRightRadius: 381,
                                        borderTopLeftRadius: 381,
                                        borderTopRightRadius: 381
                                    },
                                    children: [f(le, {
                                        links: [{
                                            href: {
                                                hash: `:hRRaLV6ls`,
                                                webPageId: `pcbCIMA_J`
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                hash: `:hRRaLV6ls`,
                                                webPageId: `pcbCIMA_J`
                                            },
                                            implicitPathVariables: void 0
                                        }],
                                        children: e => f(I, {
                                            height: 40,
                                            width: `80px`,
                                            y: (l?.y || 0) + (0 + ((l?.height || 72) - 0 - 52) / 2) + 0 + 6,
                                            ...K({
                                                ZSkZtxHul: {
                                                    width: `max(${l?.width||`100vw`} - 48px, 1px)`,
                                                    y: (l?.y || 0) + (0 + ((l?.height || 200) - 0 - 1331.1148) / 2) + 80 + 0 + 0 + 0
                                                }
                                            }, g, b),
                                            children: f(F, {
                                                className: `framer-795r52-container`,
                                                layoutDependency: C,
                                                layoutId: `xsUido2SI-container`,
                                                nodeId: `xsUido2SI`,
                                                rendersWithMotion: !0,
                                                scopeId: `q8f5UT_gI`,
                                                whileHover: q,
                                                children: f(G, {
                                                    B0eTuUnrS: e[0],
                                                    FOxcLjTdx: `Projects`,
                                                    height: `100%`,
                                                    id: `xsUido2SI`,
                                                    jkE7sM56V: `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                                    layoutId: `xsUido2SI`,
                                                    style: {
                                                        height: `100%`,
                                                        width: `100%`
                                                    },
                                                    variant: J(`Mj7WiE8_l`),
                                                    width: `100%`,
                                                    ...K({
                                                        ZSkZtxHul: {
                                                            B0eTuUnrS: e[1],
                                                            QIrXjwYb4: A
                                                        }
                                                    }, g, b)
                                                })
                                            })
                                        })
                                    }), f(le, {
                                        links: [{
                                            href: {
                                                webPageId: `LgT9AzZjO`
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                webPageId: `LgT9AzZjO`
                                            },
                                            implicitPathVariables: void 0
                                        }],
                                        children: e => f(I, {
                                            height: 40,
                                            width: `130px`,
                                            y: (l?.y || 0) + (0 + ((l?.height || 72) - 0 - 52) / 2) + 0 + 6,
                                            ...K({
                                                ZSkZtxHul: {
                                                    width: `max(${l?.width||`100vw`} - 48px, 1px)`,
                                                    y: (l?.y || 0) + (0 + ((l?.height || 200) - 0 - 1331.1148) / 2) + 80 + 0 + 0 + 64
                                                }
                                            }, g, b),
                                            children: f(F, {
                                                className: `framer-12sd3as-container`,
                                                layoutDependency: C,
                                                layoutId: `PiR2ElCO0-container`,
                                                nodeId: `PiR2ElCO0`,
                                                rendersWithMotion: !0,
                                                scopeId: `q8f5UT_gI`,
                                                whileHover: q,
                                                children: f(G, {
                                                    B0eTuUnrS: e[0],
                                                    FOxcLjTdx: `Graphic Design`,
                                                    height: `100%`,
                                                    id: `PiR2ElCO0`,
                                                    jkE7sM56V: `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                                    layoutId: `PiR2ElCO0`,
                                                    style: {
                                                        height: `100%`,
                                                        width: `100%`
                                                    },
                                                    variant: J(`Mj7WiE8_l`),
                                                    width: `100%`,
                                                    ...K({
                                                        ZSkZtxHul: {
                                                            B0eTuUnrS: e[1],
                                                            QIrXjwYb4: A
                                                        }
                                                    }, g, b)
                                                })
                                            })
                                        })
                                    }), f(le, {
                                        links: [{
                                            href: {
                                                webPageId: `pbCtkyl7Z`
                                            },
                                            implicitPathVariables: void 0
                                        }, {
                                            href: {
                                                webPageId: `pbCtkyl7Z`
                                            },
                                            implicitPathVariables: void 0
                                        }],
                                        children: e => f(I, {
                                            height: 40,
                                            width: `60px`,
                                            y: (l?.y || 0) + (0 + ((l?.height || 72) - 0 - 52) / 2) + 0 + 6,
                                            ...K({
                                                ZSkZtxHul: {
                                                    width: `max(${l?.width||`100vw`} - 48px, 1px)`,
                                                    y: (l?.y || 0) + (0 + ((l?.height || 200) - 0 - 1331.1148) / 2) + 80 + 0 + 0 + 128
                                                }
                                            }, g, b),
                                            children: f(F, {
                                                className: `framer-1h8lmxx-container`,
                                                layoutDependency: C,
                                                layoutId: `bU1w7orDR-container`,
                                                nodeId: `bU1w7orDR`,
                                                rendersWithMotion: !0,
                                                scopeId: `q8f5UT_gI`,
                                                whileHover: q,
                                                children: f(G, {
                                                    B0eTuUnrS: e[0],
                                                    FOxcLjTdx: `About`,
                                                    height: `100%`,
                                                    id: `bU1w7orDR`,
                                                    jkE7sM56V: `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                                    layoutId: `bU1w7orDR`,
                                                    style: {
                                                        height: `100%`,
                                                        width: `100%`
                                                    },
                                                    variant: J(`Mj7WiE8_l`),
                                                    width: `100%`,
                                                    ...K({
                                                        ZSkZtxHul: {
                                                            B0eTuUnrS: e[1],
                                                            QIrXjwYb4: A
                                                        }
                                                    }, g, b)
                                                })
                                            })
                                        })
                                    }), f(I, {
                                        height: 40,
                                        width: `80px`,
                                        y: (l?.y || 0) + (0 + ((l?.height || 72) - 0 - 52) / 2) + 0 + 6,
                                        ...K({
                                            ZSkZtxHul: {
                                                width: `max(${l?.width||`100vw`} - 48px, 1px)`,
                                                y: (l?.y || 0) + (0 + ((l?.height || 200) - 0 - 1331.1148) / 2) + 80 + 0 + 0 + 192
                                            }
                                        }, g, b),
                                        children: f(F, {
                                            className: `framer-19apsfz-container`,
                                            layoutDependency: C,
                                            layoutId: `fZur5zsk3-container`,
                                            nodeId: `fZur5zsk3`,
                                            rendersWithMotion: !0,
                                            scopeId: `q8f5UT_gI`,
                                            whileHover: q,
                                            children: f(G, {
                                                B0eTuUnrS: `https://drive.google.com/file/d/1KKid7IACxDBXM7Qfc4n4dcPVhcaYFpbb/view?usp=sharing`,
                                                FOxcLjTdx: `ResumÃ©`,
                                                height: `100%`,
                                                id: `fZur5zsk3`,
                                                jkE7sM56V: `var(--token-3d3e37dc-c784-4b46-95bf-180ff18227e6, rgb(11, 11, 11))`,
                                                layoutId: `fZur5zsk3`,
                                                style: {
                                                    height: `100%`,
                                                    width: `100%`
                                                },
                                                variant: J(`Mj7WiE8_l`),
                                                width: `100%`,
                                                ...K({
                                                    ZSkZtxHul: {
                                                        QIrXjwYb4: A
                                                    }
                                                }, g, b)
                                            })
                                        })
                                    }), f(I, {
                                        height: 52,
                                        width: `120px`,
                                        y: (l?.y || 0) + (0 + ((l?.height || 72) - 0 - 52) / 2) + 0 + 0,
                                        ...K({
                                            ZSkZtxHul: {
                                                width: `max(${l?.width||`100vw`} - 48px, 1px)`,
                                                y: (l?.y || 0) + (0 + ((l?.height || 200) - 0 - 1331.1148) / 2) + 80 + 0 + 0 + 256
                                            }
                                        }, g, b),
                                        children: f(F, {
                                            className: `framer-1nipmxi-container`,
                                            layoutDependency: C,
                                            layoutId: `z83uRMggx-container`,
                                            nodeId: `z83uRMggx`,
                                            rendersWithMotion: !0,
                                            scopeId: `q8f5UT_gI`,
                                            whileHover: q,
                                            children: f(G, {
                                                B0eTuUnrS: `mailto:guylainebernardez@gmail.com`,
                                                FOxcLjTdx: `Contact`,
                                                height: `100%`,
                                                id: `z83uRMggx`,
                                                jkE7sM56V: `var(--token-a5cf463f-726a-4c54-b5ae-6b9fa053d122, rgb(255, 255, 255))`,
                                                layoutId: `z83uRMggx`,
                                                style: {
                                                    height: `100%`,
                                                    width: `100%`
                                                },
                                                variant: J(`y3db6aeJW`),
                                                width: `100%`,
                                                ...K({
                                                    ZSkZtxHul: {
                                                        QIrXjwYb4: A
                                                    }
                                                }, g, b)
                                            })
                                        })
                                    })]
                                })]
                            }), P() && v(w.div, {
                                className: `framer-rfvzte`,
                                "data-framer-name": `Hamburger`,
                                "data-highlight": !0,
                                layoutDependency: C,
                                layoutId: `CsPnM2RLt`,
                                onTap: j,
                                ...K({
                                    n9pTYvk9m: {
                                        onTap: M
                                    },
                                    ZSkZtxHul: {
                                        onTap: ie
                                    }
                                }, g, b),
                                children: [f(w.div, {
                                    className: `framer-szt93z`,
                                    layoutDependency: C,
                                    layoutId: `cXSn1lou4`,
                                    style: {
                                        backgroundColor: `var(--token-1250f1bd-1f50-4c64-9765-3b3bf1708dc9, rgb(43, 25, 0))`,
                                        borderBottomLeftRadius: 2,
                                        borderBottomRightRadius: 2,
                                        borderTopLeftRadius: 2,
                                        borderTopRightRadius: 2,
                                        rotate: 0
                                    },
                                    variants: {
                                        ZSkZtxHul: {
                                            rotate: 45
                                        }
                                    }
                                }), f(w.div, {
                                    className: `framer-1rkgt7g`,
                                    layoutDependency: C,
                                    layoutId: `s75i0Xoom`,
                                    style: {
                                        backgroundColor: `var(--token-1250f1bd-1f50-4c64-9765-3b3bf1708dc9, rgb(43, 25, 0))`,
                                        borderBottomLeftRadius: 2,
                                        borderBottomRightRadius: 2,
                                        borderTopLeftRadius: 2,
                                        borderTopRightRadius: 2,
                                        rotate: 0
                                    },
                                    variants: {
                                        ZSkZtxHul: {
                                            rotate: -45
                                        }
                                    }
                                })]
                            })]
                        })
                    })
                })
            })
        }), [`.framer-c6wfL.framer-ek7scr, .framer-c6wfL .framer-ek7scr { display: block; }`, `.framer-c6wfL.framer-wdh7i4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 72px; justify-content: center; overflow: hidden; padding: 0px 80px 0px 80px; position: relative; width: 1200px; }`, `.framer-c6wfL .framer-1gcriu9 { bottom: 0px; flex: none; left: 0px; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 0; }`, `.framer-c6wfL .framer-12q0bve-container { bottom: -100px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 0; }`, `.framer-c6wfL .framer-7all82 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1400px; overflow: visible; padding: 0px; position: relative; width: 1px; }`, `.framer-c6wfL .framer-1e33y9k { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`, `.framer-c6wfL .framer-y1fcml { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-c6wfL .framer-1erpkp9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 27px; height: 52px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 580px; }`, `.framer-c6wfL .framer-795r52-container, .framer-c6wfL .framer-19apsfz-container { flex: none; height: 40px; position: relative; width: 80px; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-c6wfL .framer-12sd3as-container { flex: none; height: 40px; position: relative; width: 130px; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-c6wfL .framer-1h8lmxx-container { flex: none; height: 40px; position: relative; width: 60px; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-c6wfL .framer-1nipmxi-container { flex: none; height: 100%; position: relative; width: 120px; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-c6wfL .framer-rfvzte { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 52px; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 24px; top: calc(50.00000000000002% - 52px / 2); width: 52px; z-index: 1; }`, `.framer-c6wfL .framer-szt93z, .framer-c6wfL .framer-1rkgt7g { flex: none; height: 3px; overflow: visible; position: relative; width: 36px; }`, `.framer-c6wfL.framer-v-t9csxy.framer-wdh7i4 { gap: 0px; height: 68px; justify-content: flex-start; padding: 0px 80px 0px 0px; width: 390px; }`, `.framer-c6wfL.framer-v-t9csxy .framer-7all82 { flex: none; flex-direction: column; gap: 10px; justify-content: flex-start; left: 24px; max-width: unset; min-height: 61px; position: absolute; top: 4px; width: 286px; z-index: 1; }`, `.framer-c6wfL.framer-v-t9csxy .framer-1e33y9k { align-self: unset; height: min-content; left: 0px; position: absolute; top: 21px; z-index: 1; }`, `.framer-c6wfL.framer-v-t9csxy .framer-y1fcml { cursor: pointer; }`, `.framer-c6wfL.framer-v-t9csxy .framer-rfvzte, .framer-c6wfL.framer-v-12dtfmn .framer-rfvzte { top: 8px; }`, `.framer-c6wfL.framer-v-t9csxy .framer-szt93z, .framer-c6wfL.framer-v-12dtfmn .framer-szt93z { order: 0; width: 28px; }`, `.framer-c6wfL.framer-v-t9csxy .framer-1rkgt7g { order: 1; width: 28px; }`, `.framer-c6wfL.framer-v-12dtfmn.framer-wdh7i4 { gap: 0px; height: min-content; justify-content: flex-start; padding: 0px 24px 0px 24px; width: 390px; will-change: var(--framer-will-change-override, transform); }`, `.framer-c6wfL.framer-v-12dtfmn .framer-7all82 { flex-direction: column; gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 1.3311148086522462); justify-content: flex-start; max-width: unset; padding: 80px 0px 0px 0px; z-index: 1; }`, `.framer-c6wfL.framer-v-12dtfmn .framer-1e33y9k { align-content: flex-start; align-items: flex-start; align-self: unset; height: min-content; left: 0px; position: absolute; top: 21px; z-index: 1; }`, `.framer-c6wfL.framer-v-12dtfmn .framer-1erpkp9 { flex-direction: column; gap: 24px; height: min-content; justify-content: flex-start; width: 100%; }`, `.framer-c6wfL.framer-v-12dtfmn .framer-795r52-container, .framer-c6wfL.framer-v-12dtfmn .framer-12sd3as-container, .framer-c6wfL.framer-v-12dtfmn .framer-1h8lmxx-container, .framer-c6wfL.framer-v-12dtfmn .framer-19apsfz-container { width: 100%; }`, `.framer-c6wfL.framer-v-12dtfmn .framer-1nipmxi-container { height: 52px; width: 100%; }`, `.framer-c6wfL.framer-v-12dtfmn .framer-1rkgt7g { left: calc(50.00000000000002% - 28px / 2); order: 1; position: absolute; top: calc(50.00000000000002% - 3px / 2); width: 28px; z-index: 1; }`], `framer-c6wfL`), Y.displayName = `Navigation/ Navigation`, Y.defaultProps = {
            height: 72,
            width: 1200
        }, j(Y, {
            variant: {
                options: [`xgiU_S6sH`, `n9pTYvk9m`, `ZSkZtxHul`],
                optionTitles: [`Desktop`, `MobileClosed`, `MobileOpen`],
                title: `Variant`,
                type: R.Enum
            }
        }), M(Y, [{
            explicitInter: !0,
            fonts: [{
                cssFamilyName: `Satoshi`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Satoshi`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NHPGVFYUXYXE33DZ75OIT4JFGHITX5PE/PSUTMASCDJTVPERDYJZPN23BVUFUCQIF/J64QX5IPOHK56I2KYUNBQ5M2XWZEYKYX.woff2`,
                weight: `900`
            }]
        }, ...At, ...jt], {
            supportsExplicitInterCodegen: !0
        }), Y.loader = {
            load: (e, t) => (t.locale, Promise.allSettled([oe(G, {}, t)]))
        }
    })),
    Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, X, un = e((() => {
        b(), N(), D(), n(), gt(), Wt(), Gt = ce(Y), Kt = ue(ge), qt = ce(V), Jt = {
            GkXKlgncs: `(max-width: 809px)`,
            u1gBlcgMT: `(min-width: 810px) and (max-width: 1199px)`,
            VO_apL6qh: `(min-width: 1200px)`
        }, Yt = `framer-iT8Fr`, Xt = {
            GkXKlgncs: `framer-v-kbhsc9`,
            u1gBlcgMT: `framer-v-11run4c`,
            VO_apL6qh: `framer-v-1gl78uo`
        }, Zt = {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transformPerspective: 1200,
            transition: {
                damping: 40,
                delay: 1,
                mass: 1,
                stiffness: 150,
                type: `spring`
            },
            x: 0,
            y: 0
        }, Qt = {
            opacity: .001,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transformPerspective: 1200,
            x: 0,
            y: -30
        }, $t = {
            GkXKlgncs: [`.framer-iT8Fr.framer-1gl78uo { overflow: hidden; }`]
        }, en = Object.keys($t), tn = {
            GkXKlgncs: `.framer-kbhsc9-override`
        }, nn = [`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`, `.framer-iT8Fr.framer-18ioqal, .framer-iT8Fr .framer-18ioqal { display: block; }`, `.framer-iT8Fr.framer-1gl78uo { align-content: center; align-items: center; background: linear-gradient(180deg, var(--token-a5cf463f-726a-4c54-b5ae-6b9fa053d122, #f7f7f7) /* {"name":"Primary"} */ 0%, var(--token-394b655e-eb71-48d0-ad1f-647e45a4f590, rgb(255, 255, 255)) /* {"name":"BGColor"} */ 100%); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 80px 0px 0px 0px; position: relative; width: 100%; }`, `.framer-iT8Fr .framer-17i06rb-container { flex: none; height: auto; left: 0px; position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 2; }`, `.framer-iT8Fr .framer-bz5wx8 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: calc(40 * -1px); position: relative; width: 0px; }`, `.framer-iT8Fr .framer-1iua42m-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }`, `[data-layout-template="true"] > #overlay { margin-bottom: calc(40 * -1px); }`, `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-iT8Fr.framer-1gl78uo { gap: 0px; } .framer-iT8Fr.framer-1gl78uo > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-iT8Fr.framer-1gl78uo > :first-child { margin-top: 0px; } .framer-iT8Fr.framer-1gl78uo > :last-child { margin-bottom: 0px; } }`], rn = {
            GkXKlgncs: `(max-width: 809px)`,
            u1gBlcgMT: `(min-width: 810px) and (max-width: 1199px)`,
            VO_apL6qh: `(min-width: 1200px)`
        }, an = ({
            value: e
        }) => ve() ? null : f(`style`, {
            dangerouslySetInnerHTML: {
                __html: e
            },
            "data-framer-html-style": ``
        }), on = {
            Desktop: `VO_apL6qh`,
            Phone: `GkXKlgncs`,
            Tablet: `u1gBlcgMT`
        }, sn = ({
            height: e,
            id: t,
            width: n,
            ...r
        }) => ({
            ...r,
            variant: on[r.variant] ?? r.variant ?? `VO_apL6qh`
        }), cn = p(function(e, t) {
            let n = r(null),
                i = t ?? n,
                a = re(),
                {
                    activeLocale: o,
                    setLocale: s
                } = z(),
                {
                    style: c,
                    className: l,
                    layoutId: u,
                    variant: d,
                    children: p,
                    ...m
                } = sn(e),
                [h, g] = Oe(d, Jt, !1),
                _ = O(Yt);
            return we({}), f(Ae.Provider, {
                value: {
                    isLayoutTemplate: !0,
                    primaryVariantId: `VO_apL6qh`,
                    variantClassNames: Xt
                },
                children: v(E, {
                    id: u ?? a,
                    children: [f(an, {
                        value: `:root body { background: linear-gradient(180deg, var(--token-a5cf463f-726a-4c54-b5ae-6b9fa053d122, rgb(247, 247, 247)) /* {"name":"Primary"} */ 0%, var(--token-394b655e-eb71-48d0-ad1f-647e45a4f590, rgb(255, 255, 255)) /* {"name":"BGColor"} */ 100%); }`
                    }), v(w.div, {
                        ...m,
                        className: O(_, `framer-1gl78uo`, l),
                        "data-layout-template": !0,
                        ref: i,
                        style: {
                            ...c
                        },
                        children: [f(I, {
                            height: 72,
                            width: `100vw`,
                            y: 0,
                            children: f(Kt, {
                                animate: Zt,
                                className: `framer-17i06rb-container`,
                                "data-framer-appear-id": `17i06rb`,
                                initial: Qt,
                                layoutScroll: !0,
                                nodeId: `lB2se5rvU`,
                                optimized: !0,
                                rendersWithMotion: !0,
                                scopeId: `N6pSysoCN`,
                                style: {
                                    transformPerspective: 1200
                                },
                                children: f(Fe, {
                                    breakpoint: h,
                                    overrides: {
                                        GkXKlgncs: {
                                            variant: `n9pTYvk9m`
                                        },
                                        u1gBlcgMT: {
                                            variant: `n9pTYvk9m`
                                        }
                                    },
                                    children: f(Y, {
                                        height: `100%`,
                                        id: `lB2se5rvU`,
                                        layoutId: `lB2se5rvU`,
                                        style: {
                                            width: `100%`
                                        },
                                        variant: `xgiU_S6sH`,
                                        width: `100%`
                                    })
                                })
                            })
                        }), p, f(`div`, {
                            className: `framer-bz5wx8`
                        }), f(I, {
                            height: 587,
                            width: `100vw`,
                            y: 1080,
                            children: f(ge, {
                                className: `framer-1iua42m-container`,
                                nodeId: `bETHZ7Zvj`,
                                scopeId: `N6pSysoCN`,
                                children: f(Fe, {
                                    breakpoint: h,
                                    overrides: {
                                        GkXKlgncs: {
                                            variant: `XS5AQX_UX`
                                        },
                                        u1gBlcgMT: {
                                            variant: `KNPqYtkoS`
                                        }
                                    },
                                    children: f(V, {
                                        height: `100%`,
                                        id: `bETHZ7Zvj`,
                                        layoutId: `bETHZ7Zvj`,
                                        style: {
                                            width: `100%`
                                        },
                                        variant: `pM4CMiuq3`,
                                        width: `100%`
                                    })
                                })
                            })
                        })]
                    }), f(`div`, {
                        id: `template-overlay`
                    })]
                })
            })
        }), ln = e => e === Ne.canvas || e === Ne.export ? [...nn, ...en.flatMap(e => {
            let t = tn[e];
            return $t[e].map(e => `${t} {${e}}`)
        })] : [...nn, ...en.map(e => `@media ${rn[e]} { ${$t[e].join(` `)} }`)], X = je(cn, ln, `framer-iT8Fr`), X.displayName = `Template`, X.defaultProps = {
            height: 2400,
            width: 1200
        }, M(X, [{
            explicitInter: !0,
            fonts: []
        }, ...Gt, ...qt], {
            supportsExplicitInterCodegen: !0
        })
    }));

function dn({
    webPageId: e,
    children: t,
    style: n,
    ...r
}) {
    let i = {} [e] ?? {};
    switch (e) {
        case `pcbCIMA_J`:
        case `raTL6351b`:
        case `NeyJtYrsH`:
        case `jBz2CS1eD`:
        case `CjcNZbbcQ`:
        case `Emr32Cd7E`:
        case `QY0Aye47u`:
        case `Ju163Aqso`:
        case `MqjypxWzN`:
        case `YO7By1k2V`:
        case `taiqpsdsH`:
        case `fzGPUn4Yp`:
        case `LgT9AzZjO`:
        case `pbCtkyl7Z`:
        case `VFdHTeju2`:
        case `dusCwG2dK`:
        case `Cb5qBV9F0`:
        case `xGY8odVAP`:
            return S(X, {
                ...i,
                key: `Template1`,
                style: n
            }, t(!0));
        default:
            return t(!1)
    }
}

function fn(e) {
    switch (e) {
        case `pcbCIMA_J`:
        case `raTL6351b`:
        case `NeyJtYrsH`:
        case `jBz2CS1eD`:
        case `CjcNZbbcQ`:
        case `Emr32Cd7E`:
        case `QY0Aye47u`:
        case `Ju163Aqso`:
        case `MqjypxWzN`:
        case `YO7By1k2V`:
        case `taiqpsdsH`:
        case `fzGPUn4Yp`:
        case `LgT9AzZjO`:
        case `pbCtkyl7Z`:
        case `VFdHTeju2`:
        case `dusCwG2dK`:
        case `Cb5qBV9F0`:
        case `xGY8odVAP`:
            return [{
                hash: `kbhsc9`,
                mediaQuery: `(max-width: 809.98px)`
            }, {
                hash: `11run4c`,
                mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`
            }, {
                hash: `1gl78uo`,
                mediaQuery: `(min-width: 1200px)`
            }];
        default:
            return
    }
}
async function pn({
    routeId: e,
    pathVariables: t,
    localeId: n,
    collectionItemId: i
}) {
    let a = Z[e].page.preload();
    ie({
        disableCustomCode: !1,
        editorBarDisableFrameAncestorsSecurity: !1,
        motionDivToDiv: !1,
        onPageLocalizationSupport: !0,
        onPageMoveTool: !0,
        onPageRichTextBlockSelection: !0,
        privateRouterReplaceState: !0,
        scrollRestoration: !0,
        synchronousNavigationOnDesktop: !1,
        yieldOnTap: !1
    });
    let u = S(be, {
        children: S(ye, {
            children: S(me, {
                isWebsite: !0,
                environment: `site`,
                routeId: e,
                pathVariables: t,
                routes: Z,
                collectionUtils: gn,
                framerSiteId: _n,
                notFoundPage: P(() => import(`./MTwLzV1m30lh2K1xA3BPZgey_wAMdCFUxYaj8DbhsEc.COAr86uq.mjs`)),
                isReducedMotion: void 0,
                localeId: n,
                locales: Q,
                preserveQueryParams: void 0,
                siteCanonicalURL: `https://gbernardez.framer.website`,
                EditorBar: l === void 0 ? void 0 : (() => {
                    if (vn) {
                        console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                        return
                    }
                    return P(async () => {
                        l.__framer_editorBarDependencies = {
                            __version: 3,
                            framer: {
                                useCurrentRoute: _e,
                                useLocaleInfo: z,
                                useRouter: Se
                            },
                            react: {
                                createElement: S,
                                Fragment: s,
                                memo: m,
                                useCallback: g,
                                useEffect: o,
                                useRef: r,
                                useState: c,
                                useLayoutEffect: C
                            },
                            "react-dom": {
                                createPortal: h
                            }
                        };
                        let {
                            createEditorBar: e
                        } = await import(`https://framer.com/edit/init.mjs`);
                        return {
                            default: e()
                        }
                    })
                })(),
                adaptLayoutToTextDirection: !1,
                LayoutTemplate: dn,
                loadSnippetsModule: new Te(() => import(`./ovDgnmJecbO7vpwCMjObwR-FhOUJcbRfiMVoRk_cGvE.dObCGW41.mjs`)),
                initialCollectionItemId: i
            })
        }),
        value: {
            global: {
                enter: {
                    mask: {
                        angle: 270,
                        type: `wipe`,
                        width: `100%`
                    },
                    opacity: 1,
                    rotate: 0,
                    rotate3d: !1,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                        damping: 30,
                        delay: 0,
                        duration: .4,
                        ease: [.27, 0, .51, 1],
                        mass: 1,
                        stiffness: 400,
                        type: `tween`
                    },
                    x: `0px`,
                    y: `0px`
                }
            },
            routes: {
                pcbCIMA_J: {
                    dcZkcqgpg: {
                        enter: {
                            mask: {
                                angle: 270,
                                type: `wipe`,
                                width: `100%`
                            },
                            opacity: 1,
                            rotate: 0,
                            rotate3d: !1,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            transition: {
                                damping: 30,
                                delay: 0,
                                duration: .4,
                                ease: [.27, 0, .51, 1],
                                mass: 1,
                                stiffness: 400,
                                type: `tween`
                            },
                            x: `0px`,
                            y: `0px`
                        },
                        exit: {
                            opacity: 0,
                            rotate: 0,
                            rotate3d: !1,
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1,
                            transition: {
                                damping: 30,
                                delay: 0,
                                duration: .2,
                                ease: [.27, 0, .51, 1],
                                mass: 1,
                                stiffness: 400,
                                type: `tween`
                            },
                            x: `0px`,
                            y: `0px`
                        }
                    }
                }
            }
        }
    });
    return await a, u
}

function mn() {
    $ && l.__framer_events.push(arguments)
}
async function hn(e, t) {
    function n(e, t, n = !0) {
        if (e.caught || l.__framer_hadFatalError) return;
        let r = t?.componentStack;
        if (n) {
            if (console.warn(`Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`, e, r), Math.random() > .01) return
        } else console.error(`Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`, e, r);
        mn(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
            message: String(e),
            componentStack: r,
            stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null
        })
    }
    try {
        let r, i, a, o, s;
        if (e) s = JSON.parse(t.dataset.framerHydrateV2), r = s.routeId, i = s.localeId, a = s.pathVariables, o = s.breakpoints, r = pe(Z, r);
        else {
            pe(Z, void 0);
            let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming?.find(e => e.name === `route`)?.description;
            if (e) {
                let t = new URLSearchParams(e);
                r = t.get(`id`), i = t.get(`locale`);
                for (let [e, n] of t.entries()) e.startsWith(`var.`) && (a ??= {}, a[e.slice(4)] = n)
            }
            if (!r || !i) {
                let e = de(Z, decodeURIComponent(location.pathname), !0, Q);
                r = e.routeId, i = e.localeId, a = e.pathVariables
            }
        }
        let c = pn({
            routeId: r,
            localeId: i,
            pathVariables: a,
            collectionItemId: s?.collectionItemId
        });
        l !== void 0 && (async () => {
            let e = Z[r],
                t = Q.find(({
                    id: e
                }) => i ? e === i : e === "default").code,
                n = s?.collectionItemId ?? null;
            if (n === null && e?.collectionId && gn) {
                let r = await gn[e.collectionId]?.(),
                    [i] = Object.values(a);
                r && typeof i == `string` && (n = await r.getRecordIdBySlug(i, t || void 0) ?? null)
            }
            let o = Intl.DateTimeFormat().resolvedOptions(),
                c = o.timeZone,
                u = o.locale;
            await new Promise(e => {
                document.prerendering ? document.addEventListener(`prerenderingchange`, e, {
                    once: !0
                }) : e()
            }), l.__framer_events.push([`published_site_pageview`, {
                framerSiteId: _n,
                version: 2,
                routePath: e?.path || `/`,
                collectionItemId: n,
                framerLocale: t || null,
                webPageId: e?.abTestingVariantId ?? r,
                abTestId: e?.abTestId,
                referrer: document.referrer || null,
                url: l.location.href,
                hostname: l.location.hostname || null,
                pathname: l.location.pathname || null,
                hash: l.location.hash || null,
                search: l.location.search || null,
                timezone: c,
                locale: u
            }, `eager`]), await Me({
                priority: `background`,
                ensureContinueBeforeUnload: !0,
                continueAfter: `paint`
            }), document.dispatchEvent(new CustomEvent(`framer:pageview`, {
                detail: {
                    framerLocale: t || null
                }
            }))
        })();
        let d = await c;
        e ? (A(`framer-rewrite-breakpoints`, () => {
            se(o), l.__framer_onRewriteBreakpoints?.(o)
        }), (vn ? e => e() : u)(() => {
            ae(), ke(), x(t, d, {
                onRecoverableError: n
            })
        })) : ne(t, {
            onRecoverableError: n
        }).render(d)
    } catch (e) {
        throw n(e, void 0, !1), e
    }
}
var Z, Q, gn, _n, $, vn;
e((() => {
    if (i(), N(), n(), d(), y(), un(), Z = {
            pcbCIMA_J: {
                elements: {
                    FYg5mc6Xp: `aboutmecard`,
                    GFVgBie_i: `blog`,
                    hRRaLV6ls: `work`,
                    JC8COeYYf: `tools`,
                    JO7w2B4KS: `skills`,
                    KVC4FYKuF: `testimonials`,
                    XbNYDhQDY: `pricing`,
                    YerGlzDW8: `hero`
                },
                page: P(() => import(`./7foSBGq2CYMq_j5qYJMXBtb6uOYP_m5S-zmQ2GwXPKo.Bh8CNWLV.mjs`)),
                path: `/`
            },
            raTL6351b: {
                elements: {
                    eSBmb_Cc0: `about-1`,
                    JL6KdNS54: `about-2`,
                    kZWwuI6tN: `about-3`,
                    uhEwAmhEu: `about`
                },
                page: P(() => import(`./gecxZM2ci88fOO_DLXIjlknamuzndGSZwdzizQzPNRU.CSQMeyGQ.mjs`)),
                path: `/template/AppProject2`
            },
            NeyJtYrsH: {
                elements: {
                    eopzk9Dcy: `about-5`,
                    LfHwb0EBP: `about-3`,
                    lYZOddka9: `about-1`,
                    MdZyOGowN: `about-4`,
                    onKa8nGto: `about-6`,
                    sLTQbJavq: `about-7`,
                    t0Gb6uGyA: `about-2`,
                    YoI_cohqR: `about`,
                    zVQCesq8A: `about-8`
                },
                page: P(() => import(`./LRAHn7OZfiCFoIF6avnZpGgyF5xM22Fl6G01JZsFSJo.tS0gB-HM.mjs`)),
                path: `/work/freshbox`
            },
            jBz2CS1eD: {
                elements: {
                    afnz_r1se: `about-6`,
                    AJJwxD_B6: `about-4`,
                    C63m7SmAO: `about-1`,
                    j4eTEPX6u: `about-8`,
                    ljYa7Jr09: `about-9`,
                    Osc7dcuiT: `about`,
                    qZy8k_Sns: `about-7`,
                    rDvaPy7IE: `about-3`,
                    ThwBPyuy2: `about-5`,
                    yNnZEOJjY: `about-2`
                },
                page: P(() => import(`./gA0hHKHxquZtR-B9m7NzFnylvr2PYrbIpQz6-VMBp1Y.Do_eOmCe.mjs`)),
                path: `/work/pawmily`
            },
            CjcNZbbcQ: {
                elements: {
                    b2jwFdtAt: `about-9`,
                    Bwj4uewwb: `about-10`,
                    DYRu1vP7T: `about-4`,
                    ELtBZ1Mcs: `about-3`,
                    HAn73Fqvp: `about-2`,
                    iPYaTbPMy: `about-6`,
                    jYFMjh9mg: `about-11`,
                    s7is5frbZ: `about-8`,
                    sXDhDPifE: `about`,
                    XztUOx3mn: `about-7`,
                    YFwAGMdge: `about-1`,
                    ynRcmJDT8: `about-5`
                },
                page: P(() => import(`./bUUziHYZ3b5eRBbSlQrRHBFnaAGDntuoZmAV7FNHO1Y.qXVEAU0D.mjs`)),
                path: `/work/ricci`
            },
            Emr32Cd7E: {
                elements: {
                    enet4YECv: `about-3`,
                    FGhYNaGqO: `about-5`,
                    I7TaZ8wju: `about-1`,
                    Id7mNqQFI: `about-4`,
                    kql39Wew2: `about-7`,
                    Oh5xXnQs9: `about`,
                    s2ja9mgb8: `about-6`,
                    XldnSXMDG: `about-8`,
                    zLXM85Prq: `about-2`
                },
                page: P(() => import(`./OiYpa3KFJNTIHstsOKf7Fnlw5Ry4MroeAeIfAzfmFKw.BGcWAGXy.mjs`)),
                path: `/work/chime`
            },
            QY0Aye47u: {
                elements: {
                    c8kO7K8RV: `about`,
                    d7wrZdG0c: `about-2`,
                    Ioo9_cn73: `about-3`,
                    W4lljlatW: `about-1`
                },
                page: P(() => import(`./4AMBiobB4k2aSYdhxNVAYfsbF3a07Bb4Bsjh70UhkvI.BUNIatA5.mjs`)),
                path: `/template/DesktopProject1`
            },
            Ju163Aqso: {
                elements: {
                    bcmO4ZemK: `about-3`,
                    c2EbtYA_0: `about-2`,
                    I02rCioED: `about`,
                    xB0gf37JK: `about-1`
                },
                page: P(() => import(`./VS-UvpTQL8PJre3Nk54wZmTKnERKAd2XzUl4kwiaOAk.DvYLEorC.mjs`)),
                path: `/template/DesktopProject2`
            },
            MqjypxWzN: {
                elements: {},
                page: P(() => import(`./S7oMVyUrM9KeP1xxHJTqxSB4rwlmdwS1dALeSKOoxag.BlluXydl.mjs`)),
                path: `/contact`
            },
            YO7By1k2V: {
                elements: {},
                page: P(() => import(`./MTwLzV1m30lh2K1xA3BPZgey_wAMdCFUxYaj8DbhsEc.COAr86uq.mjs`)),
                path: `/404`
            },
            taiqpsdsH: {
                elements: {},
                page: P(() => import(`./aX8rTGnGsV_FRP-dkFtqSxmNl7nj-I1D8lYypY2Kpuc.SZUPDOLx.mjs`)),
                path: `/blog`
            },
            fzGPUn4Yp: {
                elements: {},
                page: P(() => import(`./1wiwKncDoTDIXxPRyOaux5fWpY0LrCOXyHBc7co7yl8.Akw6-eLB.mjs`)),
                path: `/collection`
            },
            LgT9AzZjO: {
                elements: {
                    dOvewuM4b: `work`
                },
                page: P(() => import(`./Et0nbBzySsAtbiEhw8b0FkOrtrErU9TNoLPdQ-VB_5M.xiEitdhn.mjs`)),
                path: `/graphicdesign`
            },
            pbCtkyl7Z: {
                elements: {
                    V034UAQK1: `about`
                },
                page: P(() => import(`./PVYDu7zdIFevMbpw-CH6n0w6Mf-g2znJ1scuWKAvAYQ.Ct8KUfxG.mjs`)),
                path: `/about`
            },
            VFdHTeju2: {
                elements: {
                    MyUo4FXUi: `about`
                },
                page: P(() => import(`./GEJUD4eDODFHEmY_YDyklkhDGKd_wE97USLFA_K8-rM.CmTYzN7X.mjs`)),
                path: `/graphicdesign/graphicbooklet`
            },
            dusCwG2dK: {
                elements: {
                    gJRfCUgLO: `about`
                },
                page: P(() => import(`./5y4bcMU3ilSv6RrnWY8sxH8l5Itw27qwTK9aczAHVE0.ChetRlyG.mjs`)),
                path: `/graphicdesign/hiyas`
            },
            Cb5qBV9F0: {
                collectionId: `HRo1kgSWg`,
                elements: {},
                page: P(() => import(`./qdMFVffRrt182PDqaypS84AQV7vizKTftc_TOtbskhc.BiBY_NUI.mjs`)),
                path: `/blog/:CkgydfCxQ`
            },
            xGY8odVAP: {
                collectionId: `DujW7pZMv`,
                elements: {},
                page: P(() => import(`./CP1WFAnEvNEAjtWoM_IzzIKbcUQpNJhtUqIglHfNsLY.BEkEw7SS.mjs`)),
                path: `/collection/:rokaQxx0m`
            }
        }, Q = [{
            code: `en`,
            id: `default`,
            name: `English`,
            slug: ``,
            textDirection: `ltr`
        }], gn = {
            DujW7pZMv: async () => (await import(`./7Xa5YZg57k2wOGeBpgus8SOQc38HaV1YOQXHPPE5WCY.BD48zkjQ.mjs`))?.utils,
            HRo1kgSWg: async () => (await import(`./KSid82uoFE57BxIBqy70eduxE6F-SYJA5s81mtgL8WA.BY1zRagZ.mjs`))?.utils
        }, _n = `43ed706250cb2687d607030c323eb37b634715fd0c74e5e363ce5754699c80c7`, $ = typeof document < `u`, vn = $ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(a.userAgent), $) {
        l.__framer_importFromPackage = (e, t) => () => S(De, {
            error: `Package component not supported: "` + t + `" in "` + e + `"`
        }), l.__framer_events = l.__framer_events || [], fe();
        let e = document.getElementById(`main`);
        `framerHydrateV2` in e.dataset ? hn(!0, e) : hn(!1, e)
    }(function() {
        $ && u(() => {
            x(document.getElementById(`__framer-badge-container`), S(ee, {}, S(te(() => import(`./PX9hIOIVM.CjUC2110.mjs`)))))
        })
    })()
}))();
export {
    fn as getLayoutTemplateBreakpoints, pn as getPageRoot
};
//# sourceMappingURL=script_main.YRR2DyBp.mjs.map