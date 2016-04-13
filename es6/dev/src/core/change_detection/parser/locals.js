import { isPresent } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { MapWrapper } from 'angular2/src/facade/collection';
export class Locals {
    constructor(parent, current) {
        this.parent = parent;
        this.current = current;
    }
    contains(name) {
        if (this.current.has(name)) {
            return true;
        }
        if (isPresent(this.parent)) {
            return this.parent.contains(name);
        }
        return false;
    }
    get(name) {
        if (this.current.has(name)) {
            return this.current.get(name);
        }
        if (isPresent(this.parent)) {
            return this.parent.get(name);
        }
        throw new BaseException(`Cannot find '${name}'`);
    }
    set(name, value) {
        // TODO(rado): consider removing this check if we can guarantee this is not
        // exposed to the public API.
        // TODO: vsavkin maybe it should check only the local map
        if (this.current.has(name)) {
            this.current.set(name, value);
        }
        else {
            throw new BaseException(`Setting of new keys post-construction is not supported. Key: ${name}.`);
        }
    }
    clearLocalValues() { MapWrapper.clearValues(this.current); }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1oSkdPVko2RC50bXAvYW5ndWxhcjIvc3JjL2NvcmUvY2hhbmdlX2RldGVjdGlvbi9wYXJzZXIvbG9jYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sMEJBQTBCO09BQzNDLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDO09BQ3JELEVBQWMsVUFBVSxFQUFDLE1BQU0sZ0NBQWdDO0FBRXRFO0lBQ0UsWUFBbUIsTUFBYyxFQUFTLE9BQXNCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQUcsQ0FBQztJQUVwRSxRQUFRLENBQUMsSUFBWTtRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVk7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELE1BQU0sSUFBSSxhQUFhLENBQUMsZ0JBQWdCLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBVTtRQUMxQiwyRUFBMkU7UUFDM0UsNkJBQTZCO1FBQzdCLHlEQUF5RDtRQUN6RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sSUFBSSxhQUFhLENBQ25CLGdFQUFnRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQy9FLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLEtBQVcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtMaXN0V3JhcHBlciwgTWFwV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIExvY2FscyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJlbnQ6IExvY2FscywgcHVibGljIGN1cnJlbnQ6IE1hcDxhbnksIGFueT4pIHt9XG5cbiAgY29udGFpbnMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5oYXMobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5wYXJlbnQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuY29udGFpbnMobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0KG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuY3VycmVudC5oYXMobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNlbnQodGhpcy5wYXJlbnQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0KG5hbWUpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKGBDYW5ub3QgZmluZCAnJHtuYW1lfSdgKTtcbiAgfVxuXG4gIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBUT0RPKHJhZG8pOiBjb25zaWRlciByZW1vdmluZyB0aGlzIGNoZWNrIGlmIHdlIGNhbiBndWFyYW50ZWUgdGhpcyBpcyBub3RcbiAgICAvLyBleHBvc2VkIHRvIHRoZSBwdWJsaWMgQVBJLlxuICAgIC8vIFRPRE86IHZzYXZraW4gbWF5YmUgaXQgc2hvdWxkIGNoZWNrIG9ubHkgdGhlIGxvY2FsIG1hcFxuICAgIGlmICh0aGlzLmN1cnJlbnQuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLmN1cnJlbnQuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEJhc2VFeGNlcHRpb24oXG4gICAgICAgICAgYFNldHRpbmcgb2YgbmV3IGtleXMgcG9zdC1jb25zdHJ1Y3Rpb24gaXMgbm90IHN1cHBvcnRlZC4gS2V5OiAke25hbWV9LmApO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyTG9jYWxWYWx1ZXMoKTogdm9pZCB7IE1hcFdyYXBwZXIuY2xlYXJWYWx1ZXModGhpcy5jdXJyZW50KTsgfVxufVxuIl19