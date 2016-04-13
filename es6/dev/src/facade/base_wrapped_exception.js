/**
 * A base class for the WrappedException that can be used to identify
 * a WrappedException from ExceptionHandler without adding circular
 * dependency.
 */
export class BaseWrappedException extends Error {
    constructor(message) {
        super(message);
    }
    get wrapperMessage() { return ''; }
    get wrapperStack() { return null; }
    get originalException() { return null; }
    get originalStack() { return null; }
    get context() { return null; }
    get message() { return ''; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZV93cmFwcGVkX2V4Y2VwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtaEpHT1ZKNkQudG1wL2FuZ3VsYXIyL3NyYy9mYWNhZGUvYmFzZV93cmFwcGVkX2V4Y2VwdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsMENBQTBDLEtBQUs7SUFDN0MsWUFBWSxPQUFlO1FBQUksTUFBTSxPQUFPLENBQUMsQ0FBQztJQUFDLENBQUM7SUFFaEQsSUFBSSxjQUFjLEtBQWEsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsSUFBSSxZQUFZLEtBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEMsSUFBSSxpQkFBaUIsS0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLGFBQWEsS0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6QyxJQUFJLE9BQU8sS0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuQyxJQUFJLE9BQU8sS0FBYSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgYmFzZSBjbGFzcyBmb3IgdGhlIFdyYXBwZWRFeGNlcHRpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBpZGVudGlmeVxuICogYSBXcmFwcGVkRXhjZXB0aW9uIGZyb20gRXhjZXB0aW9uSGFuZGxlciB3aXRob3V0IGFkZGluZyBjaXJjdWxhclxuICogZGVwZW5kZW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VXcmFwcGVkRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsgc3VwZXIobWVzc2FnZSk7IH1cblxuICBnZXQgd3JhcHBlck1lc3NhZ2UoKTogc3RyaW5nIHsgcmV0dXJuICcnOyB9XG4gIGdldCB3cmFwcGVyU3RhY2soKTogYW55IHsgcmV0dXJuIG51bGw7IH1cbiAgZ2V0IG9yaWdpbmFsRXhjZXB0aW9uKCk6IGFueSB7IHJldHVybiBudWxsOyB9XG4gIGdldCBvcmlnaW5hbFN0YWNrKCk6IGFueSB7IHJldHVybiBudWxsOyB9XG4gIGdldCBjb250ZXh0KCk6IGFueSB7IHJldHVybiBudWxsOyB9XG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7IHJldHVybiAnJzsgfVxufVxuIl19