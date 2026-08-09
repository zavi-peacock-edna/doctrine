# THE SPIDER-MAN PARADOX

**Zavijava 00.02** · the bug class that becomes structural · the operator's finding

---

## The paradox as given

> Dainty and dandy. But **lose track of him and he catalyses any space** — passed through
> time streams, between rocks, under paper. Very hard to get out.
>
> **On sight, he is a street fighter.** Destroy his mobility and his catalysation and the
> engagement is over in a moment.
>
> **Unsighted, in a nook or a cranny, he is effectively invulnerable — even to age.**

**Two entirely different animals, and the only variable is whether anyone is looking.**

---

## Why the reaction is the mechanism

**A baby sees a spider and makes every face it knows. A man does the same.**

That reaction is not squeamishness. It is a **detector**, and it is one of the fastest and
most reliable in human perception — a small, fast, many-legged thing is inspected
*immediately*, before anything else on the wall.

> **Human engineering is designed to immediately inspect a spider.**
>
> Which means the spider is only dangerous in the one condition the detector cannot reach:
> **unsighted.**

**Spider-Man is that reaction, weaponised.** He wins by being the thing you must look at, in
a place where you cannot. And a villain's reaction to *Paris* is the same reaction — the
thing that must be inspected, arriving where inspection does not go.

---

## The bug class, and it has a name

`CANON`. **Hyrum's Law:** *with a sufficient number of users, every observable behaviour of
your system will be depended upon by somebody.*

That is the paradox exactly. A defect is dainty. Then something builds on it. **Then it is
load-bearing, and removing it breaks more than it fixes.**

### Three spiders from this estate, all real

| The spider | Unsighted, it did this |
|:--|:--|
| **`gh api --jq` prints its 404 to STDOUT** | the error text became a git SHA, twice, and produced `Problems parsing JSON` with no clue pointing at the cause |
| **`size: 0`** | a kilobyte rounding artifact **became a deletion criterion**, and would have taken 25 repositories holding real work |
| **The alpha wolf** | a captive-study artifact catalysed forty years of management doctrine. **Mech retracted it and asked his own publisher to stop printing the book, and it did not come out.** It is still in every org-chart argument |

**The alpha wolf is the purest one.** The author disowned it, the evidence collapsed, and it
is still structural — because a generation built on top of it while nobody was inspecting.

---

## The rule

> **Every observable behaviour is a spider until somebody looks at it.**

1. **On sight, a spider is trivial.** Name the behaviour, write the test, and it is finished
   in one move. `gh --jq` on a 404 took one `case` statement to arrest, once anyone saw it.
2. **Unsighted, it is invulnerable and it does not age.** It passes between layers — a shell
   quirk into a variable, a variable into a SHA, a SHA into a corrupt request — and it
   accumulates dependencies the whole way.
3. **The nook and the cranny are the whole risk surface.** A crash is sighted by definition.
   The dangerous defect is the one that *returns a value*, and the value is wrong, and
   everything downstream keeps working.
4. **Therefore: inspect the quiet ones first.** Not the loud failures — those are already
   sighted. **The silent success is where the spider lives.**

### Which is grease, arriving from the other direction

**Grease** is a failure that leaves no entry.
**A spider** is a behaviour nobody has looked at yet.

They are the same animal at different times. Grease is what a spider produces while
unsighted, and the pass-through rate — **currently 66%** — is a count of nooks, not of
crannies.

> **`C-4`, restated:** a tool that fails loudly is not a spider. It is already on the wall
> and everyone has made a face at it. **The one that returns thirty-six neatly-columned rows
> and every verdict inverted has been living behind the fridge for a while.**

---

*Sight it and it is a street fight you win. Miss it and it is in the timestream.*
