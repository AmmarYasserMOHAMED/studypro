google.maps.__gjsload__('overlay', function(_) {
    var Vx = function(a) {
            this.g = a
        },
        Epa = function() {},
        Wx = function(a) {
            a.hu = a.hu || new Epa;
            return a.hu
        },
        Fpa = function(a) {
            this.Fa = new _.oj(() => {
                const b = a.hu;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Qr && a.onAdd) a.onAdd();
                        b.Qr = !0;
                        a.draw()
                    }
                } else {
                    if (b.Qr)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Qr = !1
                }
            }, 0)
        },
        Gpa = function(a, b) {
            const c = Wx(a);
            let d = c.Yq;
            d || (d = c.Yq = new Fpa(a));
            _.zb(c.Va || [], _.ch);
            var e = c.sb = c.sb || new _.Rla;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.uy = c.uy || new Vx(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.pj(d.Fa);
            c.Va = [_.ah(a, "panes_changed", e), _.ah(f, "zoom_changed", e), _.ah(f, "offset_changed", e), _.ah(b, "projection_changed", e), _.ah(f, "projectioncenterq_changed", e)];
            _.pj(d.Fa);
            b instanceof _.th ? (_.hi(b, "Ox"), _.fi(b, 148440)) : b instanceof _.Bi && (_.hi(b, "Oxs"),
                _.fi(b, 181451))
        },
        Lpa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Hpa(a) !== b && b && b instanceof _.th) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Ipa(b, a, c.overlayLayer) : c.vb.then(({
                        fa: d
                    }) => {
                        const e = new Jpa(b, d);
                        d.Qb(e);
                        c.overlayLayer = e;
                        Kpa(a);
                        Lpa(a)
                    })
                }
            }
        },
        Kpa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.i.ef(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Hpa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Mpa = function(a, b) {
            a.g.get("projection") !=
                b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        };
    _.ua(Vx, _.oh);
    Vx.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.cg(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var Xx = {};
    _.ua(Fpa, _.oh);
    Xx.Be = function(a) {
        if (a) {
            var b = a.getMap();
            (Wx(a).ay || null) !== b && (b && Gpa(a, b), Wx(a).ay = b)
        }
    };
    Xx.ef = function(a) {
        const b = Wx(a);
        var c = b.sb;
        c && c.unbindAll();
        (c = b.uy) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Va && _.zb(b.Va, _.ch);
        b.Va = null;
        b.Yq && (b.Yq.Fa.Sc(), b.Yq = null);
        delete Wx(a).ay
    };
    var Yx = {},
        Ipa = class {
            constructor(a, b, c) {
                this.map = a;
                this.g = b;
                this.i = c;
                this.h = !1;
                _.hi(this.map, "Ox");
                _.fi(this.map, 148440);
                c.Be(this)
            }
            draw() {
                this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
                this.g.draw && this.g.draw()
            }
        },
        Jpa = class {
            constructor(a, b) {
                this.l = a;
                this.i = b;
                this.g = null;
                this.h = []
            }
            dispose() {}
            jc(a, b, c, d, e, f, g, k) {
                const m = this.g = this.g || new _.Lt(this.l, this.i, () => {});
                m.jc(a, b, c, d, e, f, g, k);
                for (const q of this.h) Mpa(q, m), q.draw()
            }
            Be(a) {
                this.h.push(a);
                this.g && Mpa(a, this.g);
                this.i.refresh()
            }
            ef(a) {
                _.Ob(this.h,
                    a)
            }
        };
    Yx.Be = Lpa;
    Yx.ef = Kpa;
    _.Ug("overlay", {
        ow: function(a) {
            if (a) {
                (0, Xx.ef)(a);
                (0, Yx.ef)(a);
                var b = a.getMap();
                b && (b instanceof _.th ? (0, Yx.Be)(a) : (0, Xx.Be)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.mp(a, {
                Ve: ({
                    event: b
                }) => {
                    _.eo(b.La)
                },
                zd: b => _.Zo(b),
                Oj: b => _.$o(b),
                ve: b => _.$o(b),
                Qd: b => _.ap(b)
            }).Hl(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Zg);
            a.addEventListener("contextmenu", _.Zg);
            a.addEventListener("dblclick", _.Zg);
            a.addEventListener("mousedown", _.Zg);
            a.addEventListener("mousemove", _.Zg);
            a.addEventListener("MSPointerDown",
                _.Zg);
            a.addEventListener("pointerdown", _.Zg);
            a.addEventListener("touchstart", _.Zg);
            a.addEventListener("wheel", _.Zg)
        }
    });
});