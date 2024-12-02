abstract class VoteSystem {
    protected votes: Record<string, number> = {};
  
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
  }
  
  class Election extends VoteSystem {
    voteFor(candidate: string): void {
      this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
  
    getResults(): object {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    voteFor(candidate: string): void {
      this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }
  
    getResults(): object {
      return Object.entries(this.votes)
        .sort(([, aVotes], [, bVotes]) => bVotes - aVotes)
        .reduce((acc, [candidate, votes]) => ({ ...acc, [candidate]: votes }), {});
    }
  }
  
  const election = new Election();
  election.voteFor("Frodo Baggins");
  election.voteFor("Aragorn");
  election.voteFor("Frodo Baggins");
  election.voteFor("Legolas");
  
  const poll = new Poll();
  poll.voteFor("Seu Creyson");
  poll.voteFor("Agostinho Taxi Driver");
  poll.voteFor("Diddy Kong");
  poll.voteFor("Agostinho Taxi Driver");
  poll.voteFor("Seu Creyson");
  
  console.log("Resultados da eleição:", election.getResults());
  console.log("Resultados da pesquisa:", poll.getResults());
  