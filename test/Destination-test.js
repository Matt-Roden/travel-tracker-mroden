import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination'
import sampleData from './test-data'

describe('Destinations', () => {
let destinations
let destinationsData


  beforeEach(() => {
    destinationsData = sampleData;
    destinations = new Destination(destinationsData)
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function')
  });

  it('should be an instance of destination', () => {
    expect(destinations).to.be.an.instanceOf(Destination)
  })

  it('should find a destination by an ID', () => {
    expect(destinations.findDestination(1)).to.deep.equal({
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    });
    expect(destinations.findDestination(2)).to.deep.equal({
      "id": 2,
      "destination": "Stockholm, Sweden",
      "estimatedLodgingCostPerDay": 100,
      "estimatedFlightCostPerPerson": 780,
      "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "city with boats on the water during the day time"
    });
  })

  it('should have an ID for each destination', () => {
    expect(destinations.findDestination(1).id).to.equal(1);
    expect(destinations.findDestination(2).id).to.equal(2);
  });

  it('should have a city for each destination', () => {
    expect(destinations.findDestination(1).destination).to.equal('Lima, Peru');
    expect(destinations.findDestination(2).destination).to.equal('Stockholm, Sweden');
  });

  it('should have an estimated cost for lodging for each destination', () => {
    expect(destinations.findDestination(1).estimatedLodgingCostPerDay).to.equal(70);
    expect(destinations.findDestination(2).estimatedLodgingCostPerDay).to.equal(100);
  });

  it('should have an estimated cost per person for flights for each destination', () => {
    expect(destinations.findDestination(1).estimatedFlightCostPerPerson).to.equal(400);
    expect(destinations.findDestination(2).estimatedFlightCostPerPerson).to.equal(780);
  });

  it('should have an image for each destination', () => {
    expect(destinations.findDestination(1).image).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
    expect(destinations.findDestination(2).image).to.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');

  });

  it('should have alt text for each destination', () => {
    expect(destinations.findDestination(1).alt).to.equal('overview of city buildings with a clear sky');
    expect(destinations.findDestination(2).alt).to.equal('city with boats on the water during the day time');
  });

}); //END TEST
